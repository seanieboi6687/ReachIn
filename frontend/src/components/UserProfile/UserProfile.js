import './UserProfile.css'
import cover from './cover.jpg'
import defaultpfp from '../../components/Profilebutton/profile-default.png'
import { getUsers } from "../../store/user"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../../store/user'
import stonylogopng from './stonylogopng.png'
import aalogopng from './Appacademylogo.png'

function UserProfile() {
    const sessionUser = useSelector(state => state.session.user);
    const state = useSelector(getUsers)
    const dispatch = useDispatch()
    const allUsers = state[3]
    const { id } = useParams();
    const user = allUsers[id]

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    console.log(user)
    if (id == sessionUser?.id){
        return (
            <div className="session-user-profile-container">
                <div className='session-user-profile-head'>
                    <div className='session-user-images-container'>
                        <img className='session-user-cover' src={cover}></img>
                        <div className='session-user-pfp-container'>
                            <img className='session-user-pfp' src={defaultpfp}></img>
                        </div>
                    </div>
                    <div className='session-user-name'>
                        {sessionUser?.firstName} {sessionUser?.lastName}
                    </div>
                    <div className='location'>
                        New York City Metropolitan Area
                    </div>
                    
                </div>
                <div className='session-user-profile-about'>
                    <p className='about-header'>About</p>
                    <p className='session-user-bio'>{user?.bio}</p>
                </div>
                <div className='session-user-profile-education'>
                    <p className='education-header'>Education</p>
                    <div className='session-user-education'>
                        <img className='uni-logo' src={stonylogopng}></img>
                        <div className='uni-details'>
                            <div className='uni-name'>Stony Brook University</div>
                            <div className='degree-name'>Bachelor's degree, Consumer Psychology</div>
                            <div className='uni-time'>Aug 2016 - May 2020</div>
                        </div>
                    </div>
                    <div className='session-user-education'>
                        <img className='uni-logo' src={aalogopng}></img>
                        <div className='uni-details'>
                            <div className='uni-name'>App Academy</div>
                            <div className='degree-name'>Full-stack Software Engineering</div>
                            <div className='uni-time'>Jun 2023 - Oct 2023</div>
                        </div>
                    </div>
                </div>

            </div>
        )
    } else {
        return (
            <div className="session-user-profile-container">
                <div className='session-user-profile-head'>
                    <div className='session-user-images-container'>
                        <img className='session-user-cover' src={cover}></img>
                        <div className='session-user-pfp-container'>
                            <img className='session-user-pfp' src={defaultpfp}></img>
                        </div>
                    </div>
                    <div className='session-user-name'>
                        {user?.firstName} {user?.lastName}
                    </div>
                    <div className='location'>
                        New York City Metropolitan Area
                    </div>

                </div>
                <div className='session-user-profile-about'>
                    <p className='about-header'>About</p>
                    <p className='session-user-bio'>{user?.bio}</p>
                </div>
                <div className='session-user-profile-education'>
                    <p className='education-header'>Education</p>
                    <div className='session-user-education'>
                        <img className='uni-logo' src={stonylogopng}></img>
                        <div className='uni-details'>
                            <div className='uni-name'>Stony Brook University</div>
                            <div className='degree-name'>Bachelor's degree, Consumer Psychology</div>
                            <div className='uni-time'>Aug 2016 - May 2020</div>
                        </div>
                    </div>
                    <div className='session-user-education'>
                        <img className='uni-logo' src={aalogopng}></img>
                        <div className='uni-details'>
                            <div className='uni-name'>App Academy</div>
                            <div className='degree-name'>Full-stack Software Engineering</div>
                            <div className='uni-time'>Jun 2023 - Oct 2023</div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default UserProfile