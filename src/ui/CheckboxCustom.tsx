import React from "react";
import styled from "styled-components";

interface ICheckbox {
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: any;
  id: string;
  onChange?: (value: any) => void;
}

const Container = styled.div`
  .custom-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  .custom-checkbox + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  .custom-checkbox + label::before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  .custom-checkbox:checked + label::before {
    //border-color: #0b76ef;
    background-color: #6e41e2;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }

  /* стили при наведении курсора на checkbox */

  .custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
    border-color: #a5adb6;
  }

  /* стили для активного состояния чекбокса (при нажатии на него) */

  .custom-checkbox:not(:disabled):active + label::before {
    background-color: #bbc1cb;
    border-color: #a4acb7;
  }

  /* стили для чекбокса, находящегося в фокусе */

  .custom-checkbox:focus + label::before {
    box-shadow: 0 0 0 0.2rem rgba(128, 160, 187, 0.25);
  }

  /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */

  .custom-checkbox:focus:not(:checked) + label::before {
    border-color: #808186;
  }

  /* стили для чекбокса, находящегося в состоянии disabled */

  .custom-checkbox:disabled + label::before {
    background-color: #e9ecef;
  }
`;

const CheckBoxCustom: React.FC<ICheckbox> = ({
    value,
    checked,
    disabled,
    id,
    name,
    children,
    onChange,
}) => {
    const [checkBoxValue, setCheckBoxValue] = React.useState("");

    const changeInputValue = (e: Event) => {
        setCheckBoxValue((event.target as HTMLInputElement).value);
    };

    return (
        <Container>
            <input
                type="checkbox"
                onChange={onChange}
                disabled={disabled}
                className={"custom-checkbox"}
                id={id}
                name={name}
                value={value}
            />
            <label htmlFor={id}>
                {name} {children}
            </label>
        </Container>
    );
};

export default CheckBoxCustom;
