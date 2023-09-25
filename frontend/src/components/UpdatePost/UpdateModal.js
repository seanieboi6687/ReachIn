import React from "react";

const UPDATE_MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, 50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const UPDATE_OVERLAY_STYLES = {
    position: 'fixed',
    top: '0%',
    left: '0%',
    right: '0%',
    bottom: '0%',
    backgroundColor: 'rgba(0, 0, 0, 0.7',
    zIndex: 1000
}

export default function UpdateModal({open, children, onClose}) {
    if (!open) return null

    return (
        <>
            <div style={UPDATE_OVERLAY_STYLES}>
                <div style={UPDATE_MODAL_STYLES}>
                    <button onClick={onClose}>Close</button>
                    {children}
                </div>
            </div>
        </>
    )
}