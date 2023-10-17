import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import { IndexContext } from "../IndexContext";

function Message() {
    const {
        setOpenModal,
        formError,
    } = React.useContext(IndexContext);

    const onCancel = () => {
        setOpenModal(false);
    };

    return (
        <div>
            <CloseButton onClick={onCancel}/>
            {formError}
        </div>
    );
}
export { Message }