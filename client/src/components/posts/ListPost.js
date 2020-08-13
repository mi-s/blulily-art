import React from "react";
import { Link } from "react-router-dom";
import Post from "./Post";
import PropTypes from "prop-types";
import "./post.scss";

const ListPost = ({ posts }) => {
   return (
      <div class="row">
         {posts.map(post => (
            <div class="col-md-4" style={{maxWidth: "380px"}}>
            <Link to={`/post/${post._id}`} key={post._id} >
               <Post post={post} />
            </Link>
            </div>
         ))}
      </div>
   );
};

ListPost.propTypes = {
   posts: PropTypes.array.isRequired
};

export default ListPost;