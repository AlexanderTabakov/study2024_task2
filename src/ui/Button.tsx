import React from 'react';
import styled from "styled-components";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name?:string
    type?: "button" | "reset" | "submit" | undefined
    isDisabled?: boolean;
}


const ButtonPrimary = styled.button`

    bottom: 40px;
    width: clamp(30px, 5vw, 96px);
    height: 42px;
    background-color: #6E41E2;
    color: white;
    border: none;
    border-radius: 3px;
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



const ButtonSecondary = styled.button`

    bottom: 40px;
    width: clamp(30px, 5vw, 96px);
    height: 42px;
    background-color: white;
    color: #6E41E2;
    border: #6E41E2 solid 2px;
    border-radius: 3px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: clamp(5px, 1vw, 15px);
    line-height: 17px;
    cursor: pointer;

    &:hover {
        background-color: #6E41E20A
    }

    &:active {
        background-color: #e7e4ec;
        opacity: 14%;
    }

    &:focus {
        background-color: rgba(183, 172, 172, 0.48);
    }

    &:disabled {
        background-color: #764ae8;
    }

`

const Button:React.FC<IButtonProps> = ({name, type, isDisabled}) => {
    return (

        <>
            {type=='submit'
                ? <ButtonPrimary type={type} name={name} disabled={isDisabled}  > {name} </ButtonPrimary>
                : <ButtonSecondary type={type} name={name} disabled={isDisabled} > {name} </ButtonSecondary> }

        </>


    );
};


export default Button;
