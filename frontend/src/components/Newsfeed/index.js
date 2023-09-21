import React from "react";
import ProfileButton from "../Profilebutton/ProfileButton";
import '../../components/Newsfeed/Newsfeed.css'
import PostIndex from "../PostIndex";
import { useSelector } from "react-redux";
import defaultProfile from '../../components/Profilebutton/profile-default.png'

function Newsfeed() {
    const sessionUser = useSelector(state => state.session.user);
    return (
        <div className="newsfeed">
            <div className="create-post-container">
                <img className="default-profile-post" src={defaultProfile}></img>
                <div className="post-create-input-holder">
                    *Create-Post-Input-Placeholder*
                    </div>
            </div>
                    <hr className="divider5"/>
            <div className="post-index-container">
                <PostIndex/>
            </div>
        </div>
    )
}

export default Newsfeed