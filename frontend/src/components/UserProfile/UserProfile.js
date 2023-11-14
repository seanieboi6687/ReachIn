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

    if (id == sessionUser?.id){
        return (
            <div className="sessionusername">
                {sessionUser.firstName} {sessionUser.lastName}
            </div>
        )
    } else {
        return (
            <div className="username">
                {allUsers[id].firstName} {allUsers[id].lastName}
            </div>
        )
    }
}

export default UserProfile