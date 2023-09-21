import React from "react";
import ProfileButton from "../Profilebutton/ProfileButton";
import '../../components/Newsfeed/Newsfeed.css'
import PostIndex from "../PostIndex";
import { useSelector } from "react-redux";

function Newsfeed() {
    const sessionUser = useSelector(state => state.session.user);
    return (
        <div className="newsfeed-background">
            <div className="create-post-container">
                Hello from "create-post-container"
            </div>
            <hr className="divider1"/>
            <div className="post-index-container">
                <PostIndex/>
            </div>
        </div>
    )
}

export default Newsfeed