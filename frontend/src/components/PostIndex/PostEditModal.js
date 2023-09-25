import React from "react";
import '../../components/PostIndex/PostEditModal.css'
import { useDispatch, useSelector } from "react-redux";
import close from '../../components/CreatePost/close.png'
import editmodaldefaultProfile from '../../components/Profilebutton/profile-default.png'

const EDIT_MODAL_STYLES = {
    position: 'fixed',
    top: '38%',
    left: '50.5%',
    width: '40rem',
    height: '33rem',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    borderRadius: '8px',
    padding: '50px',
    overflowY: 'hidden',
    zIndex: 1000,
    cursor: 'default'
}

const EDIT_OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000
}

export default function EditPostModal({ open, children, onClose }) {
    const sessionUser = useSelector(state => state.session.user);

    if (!open) return null

    return (
        <>
            <div style={EDIT_OVERLAY_STYLES}>
                <div style={EDIT_MODAL_STYLES}>
                    <img className="edit-modal-profile-pic" src={editmodaldefaultProfile} alt="edit-modal-profile" />
                    <p className="edit-modal-user-name">{sessionUser.firstName} {sessionUser.lastName}</p>
                    <img className="edit-modal-close-button" onClick={onClose} src={close} alt="edit-modal-close"></img>
                    {children}
                </div>
            </div>
        </>
    )
}