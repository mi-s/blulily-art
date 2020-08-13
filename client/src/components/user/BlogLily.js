import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Nav, Button, Container} from "react-bootstrap";
import ListPost from "../posts/ListPost";
import Footer from "../../containers/layout/Footer";
import "./blog.scss";

const BlogLily = ({ posts, auth }) => {
   const [display, setDisplay] = useState(false);

   // setting no post found after waiting for a second
   useEffect(() => {
      setTimeout(() => {
         if (posts.length === 0) setDisplay(true);
      }, 1000);
   }, [posts]);

   return (
      <React.Fragment>

         <section class="jumbotron text-center" style={{background: "rgb(255, 184, 125, .8)"}}>
            <div class="container">
               <h1>
                  <Link to="/author/blu" className="mr-3 bluLink">
                     blu
                  </Link>
                  <Link to="/">
                     &
                  </Link>
                  <Link to="/author/lily" className="ml-3 lilyLink">
                     <u>lily</u>
                  </Link>
               </h1>
               <p class="lead">Something short and leading about Li (lily). Make it short and sweet, but not too short so folks don’t simply skip over it entirely.  Contact information can also go here.</p>
            </div>
         </section>

         <div className="py-4" style={{ minHeight: "60vh" }}>
            <div class="container" style={{ maxWidth: "930px" }}>

               <Nav className="justify-content-between">
                  {auth && (
                     <Link to="/post/create" className="pb-4">
                        <Button variant="light" className="styleBtn">
                           +
                     </Button>
                     </Link>
                  )}
               </Nav>

            {posts.length > 0 ? (
               <ListPost
                  posts={posts.filter(post =>
                     post.title.toLowerCase()
                  )}
               />
            ) : (
                  display && (
                     <Container
                        style={{ height: "50vh" }}
                        className="d-flex flex-column justify-content-center align-items-center"
                     >
                        {" "}
                        <p className="text-secondary h3">No posts found!</p>
                     </Container>
                  )
               )}
               </div>
         </div>

         <div style={{background: "rgb(255, 184, 125, .8)"}}>
            <Footer />
         </div>
      
      </React.Fragment>
   );
};

BlogLily.propTypes = {
   auth: PropTypes.bool.isRequired,
   posts: PropTypes.array.isRequired
};

export default BlogLily;