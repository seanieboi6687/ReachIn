import React from "react";
import '../../components/Newsfeed/Newsfeed.css'
import PostIndex from "../PostIndex";
import { useSelector } from "react-redux";
import defaultProfile from '../../components/Profilebutton/profile-default.png'

function Newsfeed() {
    const sessionUser = useSelector(state => state.session.user);
    return (
        <div className="newsfeed-container">

            <div className="newsfeed-grid">

                <div className="left-container">
                        <div className="side-profile-container">
                            <img className="side-profile-post" src={defaultProfile}></img>
                            <div className="user-name-text">{sessionUser.firstName} {sessionUser.lastName}</div>
                        </div>
                </div>

                <div className="center-container">
                    <div className="create-post-container">
                        <div className="create-post">
                            <img className="default-profile-post" src={defaultProfile}></img>
                            <div className="post-create-input-holder">
                                *Create-Post-Input-Placeholder*
                            </div>
                        </div>
                    </div>
                    <div className="post-index-container">
                        <PostIndex />
                    </div>
                </div>

                <div className="right-container">
                    <div className="dev-profile-container">
                        <p className="about">About the Developer</p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Newsfeed