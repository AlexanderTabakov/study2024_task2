import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "antd";
import Button from "ui/Button";
import CloseButton from "ui/CloseButton";

interface IPopUp {
  openTitle?: string;
  children?: React.ReactNode;
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
    position: absolute;
    border-radius: 12px;
    background: white;
    box-shadow: 0px 4px 16px 0px #33333314;
    height: 400px;
    width: clamp(300px, 60vw, 900px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-family: "Roboto", sans-serif;
    .closeIcon {
      position: absolute;
    }
  }

  .popup_content > button:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Popup: React.FC<IPopUp> = ({ openTitle, children }) => {
  const [toggle, setToggle] = useState(false);

  const togglePopup = () => setToggle((prevToggle) => !prevToggle);
  return (
    <Container>
      <Button type={"button"} onClick={togglePopup}>
        {openTitle}
      </Button>
      {toggle && (
        <div className={"popup"}>
          <div className={"popup_content"}>
            <CloseButton
              className={"closeIcon"}
              onClick={togglePopup}
            ></CloseButton>
            {children}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Popup;
