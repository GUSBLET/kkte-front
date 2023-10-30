import React, {useEffect, useRef, useState} from "react";

function ControllerPanelButton(props) {
    const modifyText = (command, defaultUi, value) => {
        document.execCommand(command, defaultUi, value);
    };

    return (
        <button
            key={props.button.id}
            id={props.button.id}
            className={`${props.button.class} `}
            onClick={() => {
                if (props.button.class.includes('option-button')) {
                    modifyText(props.button.id, false, null);
                }
                else if (props.button.action) {
                    props.button.action();
                }
            }}>
            <i className={`fa-solid ${props.button.icon}`}></i>
        </button>
    );
}

export default ControllerPanelButton;