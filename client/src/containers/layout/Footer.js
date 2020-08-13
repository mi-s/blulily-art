import React from "react";
import PropTypes from "prop-types";
import FooterBar from "../../components/layout/FooterBar";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

const Footer = ({ auth, logoutUser }) => {
    const handleClick = e => {
       e.preventDefault();
       logoutUser();
    };
    return <FooterBar auth={auth.isAuthenticated} onClick={handleClick} />;
 };
 
 const mapStateToProps = state => ({
    auth: state.auth
 });
 
 Footer.propTypes = {
    auth: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired
 };
 
 export default connect(
    mapStateToProps,
    { logoutUser }
 )(Footer);