import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Blog from "../components/user/BlogAnd";
import { getPosts, getPostsByAuthor } from "../actions/postActions";

const BlogPageAnd = ({
   isAuthenticated,
   getPostsByAuthor,
   getPosts,
   match,
   posts
}) => {
   useEffect(() => {  // true FROM isAuthenticated, always shows blog posts
      match.params.author ? getPostsByAuthor(match.params.author) : getPosts() ;
   }, [isAuthenticated, getPosts, getPostsByAuthor, match]);

   return <Blog posts={posts} auth={isAuthenticated} />;
};

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated,
   posts: state.post.posts
});

BlogPageAnd.propTypes = {
   posts: PropTypes.array.isRequired,
   isAuthenticated: PropTypes.bool.isRequired,
   getPosts: PropTypes.func.isRequired,
   getPostsByAuthor: PropTypes.func.isRequired
};

export default connect(
   mapStateToProps,
   { getPostsByAuthor, getPosts }
)(BlogPageAnd);