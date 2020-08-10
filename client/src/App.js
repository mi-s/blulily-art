import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import LoginPage from "./containers/auth/LoginPage";
import SignUpPage from "./containers/auth/SignUpPage";

import Navbar from "./containers/layout/Navbar";
import BlogPage from "./containers/BlogPage";
import PrivateRoute from "./utils/PrivateRoute";

import ViewPostPage from "./containers/posts/ViewPostPage";
import CreatePostPage from "./containers/posts/CreatePostPage";
import UpdatePostPage from "./containers/posts/UpdatePostPage";

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
            <Navbar />
            <div class="container">
            <Switch>
               <Route path="/" exact component={BlogPage} />
               <Route path="/login" component={LoginPage} />
               {/* Removed Signup page
                <Route path="/signup" component={SignUpPage} />
               */}
               {/* <PrivateRoute exact path="/blog" component={BlogPage} /> */}
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
               <Route path="/:author" component={BlogPage} />
               <Redirect from="*" to="/" />
            </Switch>
            </div>
         </BrowserRouter>
      </Provider>
   );
};

export default App;