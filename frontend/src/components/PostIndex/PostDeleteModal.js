import React from "react";
import '../../components/PostIndex/PostDeleteModal.css'
import { deletePost } from "../../store/post";
import { useDispatch } from "react-redux";

const DELETE_MODAL_STYLES = {
    position: 'fixed',
    top: '14%',
    left: '50%',
    width: '14rem',
    height: '4rem',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    borderRadius: '8px',
    padding: '50px',
    overflowY: 'hidden',
    zIndex: 1000
}

const DELETE_OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 1000
}

export default function DeletePostModal({postId, open, children, onClose}) {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deletePost(postId));
        onClose()
    }

    if (!open) return null

    return (
        <>
            <div style={DELETE_OVERLAY_STYLES}>
                <div style={DELETE_MODAL_STYLES}>
                    <div className="cancel-button-container">
                        <button className='delete-modal-cancel-button' onClick={onClose}>Cancel</button>
                        <button className='delete-modal-delete-button' onClick={handleDelete}>Delete</button>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}