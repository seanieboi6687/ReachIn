import { getOnePost, fetchAllPosts } from "../../store/post"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import EditPostModal from "../PostIndex/PostEditModal"

const PostItem = (post) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);


    useEffect(() => {
        dispatch(fetchAllPosts());
    },[dispatch])

    return (
        <></>
    )
}

export default PostItem