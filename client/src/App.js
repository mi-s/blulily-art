import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import LoginPage from "./containers/auth/LoginPage";

import PrivateRoute from "./utils/PrivateRoute";

import ViewPostPage from "./containers/posts/ViewPostPage";
import CreatePostPage from "./containers/posts/CreatePostPage";
import UpdatePostPage from "./containers/posts/UpdatePostPage";

import BlogPageAnd from "./containers/BlogPageAnd";
import BlogPageBlu from "./containers/BlogPageBlu";
import BlogPageLily from "./containers/BlogPageLily";

if (localStorage.jwtToken) {
   const token = localStorage.jwtToken;
   setAuthToken(token);
   const decoded = jwt_decode(token);
   store.dispatch(setCurrentUser(decoded));
   const currentTime = Date.now() / 1000;
   if (decoded.exp < currentTime) {
      store.dispatch(logoutUser());
      window.location.href = "./loginPage";
   }
}

const App = () => {
   return (
      <Provider store={store}>
         <BrowserRouter>
               <Switch>
                  <Route path="/" exact component={BlogPageAnd} />
                  <Route path="/author/blu" exact component={BlogPageBlu} />
                  <Route path="/author/lily" exact component={BlogPageLily} />
                  <Route path="/login" component={LoginPage} />
                  <PrivateRoute
                     exact
                     path="/post/create"
                     component={CreatePostPage}
                  />
                  <PrivateRoute
                     exact
                     path="/post/update/:id"
                     component={UpdatePostPage}
                  />
                  <Route exact path="/post/:id" component={ViewPostPage} />
                  <Redirect from="*" to="/" />
               </Switch>
         </BrowserRouter>
      </Provider>
   );
};

export default App;