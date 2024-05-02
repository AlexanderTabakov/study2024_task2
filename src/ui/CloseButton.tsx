import React from "react";
import styled from "styled-components";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name?:string
    type?: "button" | "reset" | "submit" | undefined
    isDisabled?: boolean;
    onClick?: () => void;
}


const CloseButtonPrimary = styled.button`

    bottom: 40px;
    width: clamp(30px, 5vw, 96px);
    border-radius: 50%;    
    background-color: #6E41E2;
    color: white;
    border: none;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: clamp(5px, 1vw, 15px);
    line-height: 17px;
    cursor: pointer;    
    
    &:hover {
        background-color:#5835B0
    }
    &:active {
        background-color: #472C8A;
    }
    &:focus{
        background-color: #6E41E2;
    }
    &:disabled {
        background-color: #E3DAF9;
    }  
        
`



const CloseButton:React.FC<IButtonProps> = ({name, type, isDisabled, onClick, }) => {
    return (

                 <CloseButtonPrimary onClick={onClick} type={type} name={name} disabled={isDisabled} > + </CloseButtonPrimary>

    );
};

export default CloseButton;
