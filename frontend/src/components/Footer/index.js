import React from "react";
import "../../components/Footer/footer.css"
import logo from "../../components/Footer/logo.png"
import git from "../../components/Footer/gitlogo.png"
import link from "../../components/Footer/link.png"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Footer() {

    return (
        <div className="footer-container">
            <div className="logo">
                <img className="logo-png" src={logo}></img>
            </div>
            <div className="git">
                <a href="https://github.com/seanieboi6687" target="_blank">
                    <img className="git-png" src={git}></img>
                </a>
                <div>
                    <NavLink className="git-label" to="https://github.com/seanieboi6687">Github</NavLink>
                </div>
            </div>
            <div className="linked">
                <a href="https://www.linkedin.com/in/seanjeun/" target="_blank">
                    <img className="link-png" src={link}></img>
                </a>
                <div>
                    <NavLink className="link-label" to="https://www.linkedin.com/in/seanjeun/">LinkedIn</NavLink>
                </div>
            </div>
            <div className="dev-name">
                Developed by: Sean Jeun ©️ 2023
            </div>
            <div className="thank-you">
                Thank you for visiting ReachIn!
            </div>
        </div>
    )
}

export default Footer