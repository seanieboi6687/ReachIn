import React from "react";
import close from '../../components/CreatePost/close.png'
import '../../components/Comment/CommentEditModal.css'

const COMMENT_EDIT_MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '40rem',
    height: 'fit-content',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    borderRadius: '8px',
    paddingLeft: '50px',
    paddingRight: '50px',
    paddingTop: '50px',
    paddingBottom: '30px',
    overflowY: 'hidden',
    zIndex: 1000,
    cursor: 'default'
}

const COMMENT_EDIT_OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000
}

export default function EditCommentModal({ open, children, onClose, commentid }) {

    if (!open) return null

    return (
        <>
            <div style={COMMENT_EDIT_OVERLAY_STYLES}>
                <div style={COMMENT_EDIT_MODAL_STYLES}>
                    <div className="comment-edit-close-button-container">
                        <img className="comment-edit-modal-close-button" onClick={onClose} src={close} alt="edit-modal-close"></img>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}