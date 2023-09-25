import React, { useState, useEffect } from "react";
import options from '../../components/PostIndex/threedots.png'
import pencil from '../../components/PostIndex/editpencil.png'
import trash from '../../components/PostIndex/posttrash.png'

function OptionButton() {
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    let dropdown;
    if (showMenu) {
        dropdown = (
            <div className="edit-dropdown-container">
                {showMenu && (
                    <ul className="edit-dropdown">
                        <div className="edit-pencil-container">
                            <img className="edit-pencil" src={pencil}/>
                            <p className="edit-label">Edit post</p>
                        </div>
                        <div className="trash-container">
                            <img className="trash" src={trash} />
                            <p className="delete-label">Delete post</p>
                        </div>
                    </ul>)}
            </div>
        );
    } else {
        <></>
    }

    return (
        <>
            <div className='three-dots-container'>
                <img className='three-dots' onClick={openMenu} src={options}></img>
            </div>
                {dropdown}
        </>
    );
}

export default OptionButton;