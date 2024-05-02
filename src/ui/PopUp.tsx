import React, { useState } from 'react';
import styled from "styled-components";
import {Form} from "antd";

interface IPopUp {
    openTitle?: string,
    children?: React.ReactNode,
}

const Container = styled.aside`

    transform: scale(1);
    transition: 0.5s;
    .popup {
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: scale(1);
        transition: 0.5s;
    }

    .popup_content {
        padding: 20px;
        border-radius: 12px;
        background: wheat;
        height: 400px;
        width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-family: 'Roboto', sans-serif;

    }

    .popup_content>button {

        border-radius: 50%;
        border: none;
        background: rgba(0,0,0,0);
        rotate: 45deg;
        cursor: pointer;
        font-size: 50px;
        color: #be621d;
        
    }

    .popup_content > button:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
    
`


const Popup:React.FC<IPopUp> = ({ openTitle,  children }) => {
    const [toggle, setToggle] = useState(false);

    const togglePopup = () => setToggle((prevToggle) => !prevToggle);
    return (

            <Container>
            <div onClick={togglePopup}>{openTitle}</div>
            {toggle && (
                <div className={"popup"}>
                    <div className={"popup_content"}>
                        {children}
                        <button className={"close-icon"} onClick={togglePopup }>
                            +
                        </button>
                    </div>
                </div>
            )}
            </Container>

    );
};

export default Popup
