import React, {  useState } from "react";
import styled from "styled-components";
import CloseButton from "ui/CloseButton";
import useStore from "store";
import InputAndValidate from "ui/InputAndValidate";
import Button from "ui/Button";

interface IForm {
  children?: React.ReactNode;
  formName?: string;
  formDescription?: string;
  form_fields?: HTMLInputElement;
  form_buttons?: HTMLButtonElement;
  files?: any;
  onChange?: void;
}

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  align-content: center;
  gap: 10px;
  width: clamp(150px, 40vw, 652px);
  padding: 10px;
  border: #6e41e2 2px solid;
  font-family: "Roboto", sans-serif;
  .formBtns {
    display: flex;
    align-items: center;
    gap: 7px;
  }

  .formFields {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 15px;
  }

  .closeBtn {
    position: absolute;
    z-index: 0;
    top: 5px;
    right: 5px;
  }
`;

const Form: React.FC<IForm> = ({ files, onChange }) => {
    const { jsonFiles } = useStore.getState();

    console.log("testfiles", jsonFiles);

    const [closed, setClosed] = React.useState(true);
    const toggleForm = () => setClosed((prevToggle) => !prevToggle);

    const [formValues, setFormValues] = useState({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value }: HTMLInputElement = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        console.log(formValues);
    };

    return (
        <>
            {closed && (
                <Container>
                    <div className={"closeBtn"}>
                        {" "}
                        <CloseButton onClick={toggleForm} />
                    </div>

                    <h2>{files.form_name}</h2>

                    <h3>{files.form_Description}</h3>

                    <div className={"formFields"}>
                        {files.form_fields.map((f: any, index: any) => (
                            <InputAndValidate
                                key={f.index}
                                id={f.id}
                                type={f.type}
                                label={f.label}
                                required={f.required}
                                maxlength={f.maxlength}
                                placeholder={f.placeholder}
                                pattern={f.pattern}
                                minlength={f.minlength}
                                // onChange={handleChange}
                            />
                        ))}
                    </div>

                    <div className={"formBtns"}>
                        {files.form_buttons.map((f: any) => (
                            <Button name={f.name} type={f.type} />
                        ))}
                    </div>
                </Container>
            )}
        </>
    );
};

export default Form;
