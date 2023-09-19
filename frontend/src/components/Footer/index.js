import React, { useState } from "react";
import "../../components/Footer/footer.css"
import logo from "../../components/Footer/logo.png"

function Footer() {

    return (
        <div className="footer-container">
            <img className="logo-png" src={logo}></img>
        </div>
    )
}

export default Footer