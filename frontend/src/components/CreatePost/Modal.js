import React from "react";
import ReactDOM from "react-dom";

export default function Modal ({open, children, onClose}) {
    const MODAL_STYLES = {
        position: 'fixed',
        top: '3.7%',
        left: '31%',
        transfor: 'translate(-50%, -50%)',
        backgroundColor: '#FFF',
        padding: '50px',
        zIndex: 1000,
        borderRadius: '10px',
        width: '40rem',
        height: '30rem'
    }

    const OVERLAY_STYLES = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10000
    }
    if (!open) return null

    return ReactDOM.createPortal(
        <div id="modal-background">
            <div style={MODAL_STYLES}>
                <button onClick={onClose}>Close Modal</button>
                {children}
            </div>
        </div>,
        document.getElementById('portal')
    )
}