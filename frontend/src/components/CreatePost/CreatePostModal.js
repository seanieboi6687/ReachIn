import React from "react";
import ReactDOM from "react-dom";
import './Modal.css'
import modaldefaultProfile from '../../components/Profilebutton/profile-default.png'
import { useSelector } from "react-redux";
import close from '../../components/CreatePost/close.png'

const MODAL_STYLES = {
    position: 'fixed',
    top: '2.2rem',
    left: '28.7%',
    transfor: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    paddingLeft: '30px',
    paddingRight: '30px',
    paddingBottom: '0px',
    zIndex: 1000,
    borderRadius: '10px',
    width: '41.4rem',
    height: 'fit-content',
    minHeight: '20rem',
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 10000
}

export default function Modal ({open, children, onClose}) {
    const sessionUser = useSelector(state => state.session.user);

    if (!open) return null

    return ReactDOM.createPortal(
        <div style={OVERLAY_STYLES}>
            <div style={MODAL_STYLES}>
                <div className="modal-top-banner-container">
                    <img className="modal-profile-pic" src={modaldefaultProfile} alt="modal-profile"/>
                    <p className="modal-user-name">{sessionUser.firstName} {sessionUser.lastName}</p>
                    <img className="modal-close-button" onClick={onClose} src={close} alt="modal-close"></img>
                </div>
                <div className="children-container">
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    )
}