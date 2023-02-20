import React from "react";
import './CreateTodoButtom.css'
import { TodoContext } from "../TodoContex";

function CreateTodoButtom(props){
    const {openModal,setOpenModal} = React.useContext(TodoContext);

    const onClickButton = () => {
        setOpenModal(!openModal);
    };
    

    return(
            <button 
            className="CreateTodoButton"
            onClick={onClickButton}
             >
                +
            </button>
    );
}

export {CreateTodoButtom};