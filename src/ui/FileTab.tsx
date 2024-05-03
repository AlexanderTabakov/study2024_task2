import React from "react";
import styled from "styled-components";

interface IFileTab {
  name?: string;
  onClick?: () => void;
}

const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  list-style-type: none;
  width: fit-content;
  height: 10px;
  top: 120px;
  left: 48px;
  padding: 20px 98px 20px 20px;
  gap: 16px;
  border-radius: 4px;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  .removeBtn {
    border: none;
    background: none;
    width: 10px;
    font-family: Roboto, sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
  }

  .removeBtn:hover {
    cursor: pointer;
    transform: scale(120%);
  }
`;

const FileTab: React.FC<IFileTab> = ({ name, onClick }) => {
    return (
        <Container>
            <p>{name}</p>
            <button onClick={onClick} className={"removeBtn"}>
                Удалить
            </button>
        </Container>
    );
};

export default FileTab;
