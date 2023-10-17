import React from "react";
import './Modal.css';
import { IndexContext } from "../IndexContext";

function Modal({ children }) {
    React.useContext(IndexContext);

    return (
        <div className="ModalBackground">
            {children}
        </div>
    );
}

export { Modal }