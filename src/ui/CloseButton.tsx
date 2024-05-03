import React from "react";
import styled from "styled-components";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  type?: "button" | "reset" | "submit" | undefined;
  isDisabled?: boolean;
  onClick?: () => void;
}

const CloseButtonPrimary = styled.button`
  width: 70px;
  height: 70px;
  padding: 3px;
  border-radius: 50%;
  background-color: #6e41e2;
  color: white;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: clamp(5px, 3vw, 40px);
  cursor: pointer;
  transform: rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #5835b0;
  }
  &:active {
    background-color: #472c8a;
  }
  &:focus {
    background-color: #6e41e2;
  }
  &:disabled {
    background-color: #e3daf9;
  }
`;

const CloseButton: React.FC<IButtonProps> = ({
  name,
  type,
  isDisabled,
  onClick,
}) => {
  return (
    <CloseButtonPrimary
      onClick={onClick}
      type={type}
      name={name}
      disabled={isDisabled}
    >
      {" "}
      +{" "}
    </CloseButtonPrimary>
  );
};

export default CloseButton;
