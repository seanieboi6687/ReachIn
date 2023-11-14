import './UserProfile.css'
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

    if (sessionUser?.id === user?.id){
        return (
            <div className="sessionusername">
                sessionUser
            </div>
        )
    } else {
        return (
            <div className="username">
                otherUser
            </div>
        )
    }
}

export default UserProfile