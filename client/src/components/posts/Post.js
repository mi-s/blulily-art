import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import getFormattedDate from "../../utils/getFormattedDate";
import "./post.scss";

const Post = ({ post }) => {
   const postDate = getFormattedDate(post.date);
   return (
      <Card className="mb-4 shadow-sm" >
         <Card.Img variant="top" src="https://via.placeholder.com/348x225" />
         <Card.Body>
            <Card.Title className="mb-0">{post.title}</Card.Title>
         </Card.Body>
         <Card.Footer>
            <small className="text-muted">Posted on: {postDate}</small>
         </Card.Footer>
      </Card>
   );
};

Post.propTypes = {
   post: PropTypes.object.isRequired
};

export default Post;