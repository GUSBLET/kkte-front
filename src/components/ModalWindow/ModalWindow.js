import styles from './ModalWindow.module.css';
import React from "react";

function ModalWindow({ active, setActive, children }) {


    return (
        <div className={`${styles.modal} ${active ? styles.active : ''}`} onClick={() => setActive(false)}>
            <div className={`${styles.modal__content} ${active ? styles.active : ''}`} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default ModalWindow;
