import React, { useState } from "react";
import styled from "styled-components";
import { Simulate } from "react-dom/test-utils";
import input = Simulate.input;

interface IInput {
  id: string;
  type: string;
  label: string;
  required: boolean;
  placeholder?: string;
  maxlength: number;
  minlength?: number;
  pattern?: string;
}

const Container = styled.div`
  position: relative;

  font-family: "Roboto", sans-serif;

  .placeHolderSpan {
    position: absolute;
    opacity: 1;
  }

  .input {
    width: clamp(250px, 5vw, 482px);
    height: clamp(30px, 2vw, 56px);
    //styleName: 16 Paragraph 2;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;

    border: none;
    box-shadow: 0 4px 4px 0 #3333330a;
  }
  :focus {
    box-shadow: 0 4px 24px 0 #3333333d;
    border: none;
  }

  .inputError {
    width: clamp(250px, 5vw, 482px);
    height: clamp(30px, 2vw, 56px);
    background-color: #f9e3e3;
    border: none;
    box-shadow: 0 4px 4px 0 #3333330a;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
  }

  &:focus-within {
    .placeHolderSpan {
      position: absolute;
      opacity: 1;
        font-size: 10px;
        bottom: 2px;
    }
  }

  .errorText {
    position: absolute;
    color: #db524e;
    bottom: -20px;
    left: 0;
  }
`;

const InputAndValidate: React.FC<IInput> = ({
    id,
    type,
    label,
    required,
    placeholder,
    maxlength,
    minlength,
    pattern,
}) => {
    const [value, setValue] = React.useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const onInputHandler = (e: Event) => {
        const inputValue = (e.target as HTMLInputElement).value;
        setValue(inputValue);
        console.log("inputValue", value);
    };

    const onErrorTest = () => {
        if (value.match(pattern)) {
            setErrorMessage("");
        } else {
            setErrorMessage("Incorrect pattern");
        }
        return false;
    };

    const [inputValue, setInputValue] = React.useState("");

    const changeInputValue = (e: Event) => {
        setInputValue((event.target as HTMLInputElement).value);
    };

    const testInput = () => {
        onInputHandler(event);
        onErrorTest();
        changeInputValue(event);
    };

    return (
        <>
            <Container>
                <label style={{ opacity: 0, position: "absolute" }} htmlFor={id}>
                    {" "}
                    {label}
                </label>

                <span className={"placeHolderSpan"}>{placeholder}</span>
                <input
                    className={errorMessage ? "inputError" : "input"}
                    type={type}
                    id={id}
                    // placeholder={placeholder}
                    maxLength={maxlength}
                    minLength={minlength}
                    required={required}
                    onChange={testInput}
                />

                {errorMessage && <span className={"errorText"}>{errorMessage}</span>}
            </Container>
        </>
    );
};

export default InputAndValidate;
