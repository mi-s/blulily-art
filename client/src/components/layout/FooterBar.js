import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FooterBar = ({ auth, onClick }) => (
    <footer>
        <div class="container d-flex justify-content-between">
            <p>This is the footer.</p>
            {auth ? (
                <Button href="/logout" onClick={onClick} variant="outline-dark">
                        Logout
                </Button>
            ) : (
                    <Button href="/login" variant="outline-dark">
                            Login
                    </Button>
                )}
        </div>
    </footer>
);

FooterBar.propTypes = {
    auth: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default FooterBar;