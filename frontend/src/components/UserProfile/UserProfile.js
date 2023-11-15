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
                        <img className='session-user-pfp' src={defaultpfp}></img>
                    </div>
                    <p>session user profile head</p>
                </div>
                <div className='session-user-profile-about'>
                    session user about
                </div>
                <div className='session-user-profile-activity'>
                    session user activity
                </div>
                <div className='session-user-profile-education'>
                    session user education
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