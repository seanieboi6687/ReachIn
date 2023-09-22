import React from "react";
import '../../components/Newsfeed/Newsfeed.css'
import PostIndex from "../PostIndex";
import { useSelector } from "react-redux";
import defaultProfile from '../../components/Profilebutton/profile-default.png'

function Newsfeed() {
    const sessionUser = useSelector(state => state.session.user);
    return (
        <div className="newsfeed">
            <div className="side-profile-container">
                <img className="side-profile-post" src={defaultProfile}></img>
                <div className="user-name-text">{sessionUser.firstName} {sessionUser.lastName}</div>
            </div>
            <div className="dev-profile-container">
                <p className="about">About the Developer</p>
            </div>
            <div className="create-post-container">
                <img className="default-profile-post" src={defaultProfile}></img>
                <div className="post-create-input-holder">
                    *Create-Post-Input-Placeholder*
                </div>
            </div>
                <div>
                    <hr className="divider5"/>
                </div>
            <div className="post-index-container">
                <PostIndex/>
            </div>
        </div>
    )
}

export default Newsfeed