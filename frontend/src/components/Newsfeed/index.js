import React from "react";
import ProfileButton from "../Profilebutton/ProfileButton";
import '../../components/Newsfeed/Newsfeed.css'
import PostIndex from "../PostIndex";

function Newsfeed() {

    return (
        <>
            <h1 className="hello">Hello from Newsfeed</h1>
            <PostIndex/>
        </>
    )
}

export default Newsfeed