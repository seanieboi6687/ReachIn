import './UserProfile.css'
import cover from './cover.jpg'
import defaultpfp from '../../components/Profilebutton/profile-default.png'
import { getUsers } from "../../store/user"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function UserProfile() {
    const sessionUser = useSelector(state => state.session.user);
    const state = useSelector(getUsers)
    const allUsers = state[3]
    const { id } = useParams();
    const user = allUsers[id]

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
                        {sessionUser.firstName} {sessionUser.lastName}
                    </div>
                    <div className='location'>
                        New York City Metropolitan Area
                    </div>
                    
                </div>
                <div className='session-user-profile-about'>
                    <p className='about-header'>About</p>
                    <p className='session-user-bio'>{user.bio}</p>
                </div>
                <div className='session-user-profile-education'>
                    <p className='education-header'>Education</p>
                </div>

            </div>
        )
    } else {
        return (
            <div className="username">
                other user name
            </div>
        )
    }
}

export default UserProfile