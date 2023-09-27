import React from 'react';
import '../../components/Newsfeed/Newsfeed.css'
import PostIndex from '../PostIndex';
import { useSelector } from 'react-redux';
import defaultProfile from '../../components/Profilebutton/profile-default.png'
import CreatePostModal from '../CreatePost/CreatePostModal';
import { useState } from 'react';
import CreatePostForm from '../CreatePost/CreatePostForm';
import me from '../../components/Newsfeed/me.png'
import git from '../../components/Footer/gitlogo.png'
import link from '../../components/Footer/link.png'
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import reachinlogo from '../../components/Newsfeed/reachinlogo.png'


function Newsfeed() {
    const [isOpen, setIsOpen] = useState(false)
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className="newsfeed-container">

            <div className="newsfeed-grid">

                <div className="left-container">
                        <div className="side-profile-container">
                            <img className="side-profile-post" src={defaultProfile} alt="default"></img>
                            <div className="user-name-text">{sessionUser.firstName} {sessionUser.lastName}</div>
                            <div className="side-profile-divider-container">
                                <hr className="side-profile-divider"/>
                            <div className="profile-viewers-container">
                                <p className="profile-viewers">Profile viewers:</p>
                                <p className="profile-viewers-count">27</p>
                            </div>
                            </div>
                        </div>
                </div>

                <div className="center-container">
                    <div className="create-post-container">
                        <div className="create-post">
                            <img className="default-profile-pic" src={defaultProfile} alt="default"></img>
                            <div className="post-create-input-container">
                                <button onClick={() => setIsOpen(true)} className="start-post-create-button">Start a post</button>
                                <div className="modal-container">
                                    <CreatePostModal open={isOpen} onClose={() => setIsOpen(false)}>
                                        <CreatePostForm onClose={() => setIsOpen(false)} />
                                    </CreatePostModal>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="newsfeed-divider-container">
                        <hr className="newsfeed-divider" />
                        <p className="sorted-by">Sorted by:</p>
                        <p className="latest">Latest</p>
                    </div>
                    <div className="post-index-container">
                        <PostIndex />
                    </div>
                </div>

                <div className="right-container">
                    <div className="dev-profile-container">
                        <p className="about">About the Developer</p>
                        <img className="sean-profile-pic" src={me} alt="sean"></img>
                        <p className="about-content1">
                            Sean Jeun is a fullstack engineer proficient in JavaScript, HTML, CSS, React/Redux, Ruby, and Rails.
                        </p>
                        <p className="about-content2">
                            Sean also has previous experience in Tech Recruiting for TikTok, Amazon, Nike, Bloomberg, Google, and more! Feel free to reach out at pca.sean.jeun@gmail.com with any fitting opportunities!
                        </p>
                        <div className="socials-container">
                            <div className="git1">
                                <a href="https://github.com/seanieboi6687" target="_blank" rel="noreferrer">
                                    <img className="git-png1" src={git} alt="git"></img>
                                </a>
                                <div>
                                    <NavLink className="git-label1" to="https://github.com/seanieboi6687">Github</NavLink>
                                </div>
                            </div>
                            <div className="linked1">
                                <a href="https://www.linkedin.com/in/seanjeun/" target="_blank" rel="noreferrer">
                                    <img className="link-png1" src={link} alt="linkedin"></img>
                                </a>
                                <div>
                                    <NavLink className="link-label1" to="https://www.linkedin.com/in/seanjeun/">LinkedIn</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-container-footer">
                        <img className="right-footer-logo" src={reachinlogo} alt=''></img>
                        <p className="right-footer-slogan">ReachIn Corporation © 2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed