import React, { useEffect } from "react";
import styled from "styled-components";
import CloseButton from "ui/CloseButton";
import useStore from "store";
import InputAndValidate from "ui/InputAndValidate";
import Button from "ui/Button";

interface IForm {
  children?: React.ReactNode;
  formName?: string;
  formDescription?: string;
  form_fields?: any;
  form_buttons?: any;
  files?: any;
}

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  align-content: center;
  gap: 10px;
  width: clamp(150px, 40vw, 900px);
  padding: 10px;
  border: blue 2px solid;
  .formBtns{
    display: flex;
    align-items: center;
    gap: 7px;
  }
  
  .formFields{
    display: flex;
    flex-direction: column;
    column-gap: 10px;
  }
  
  .closeBtn{
    position: absolute;
    z-index: 0;
    top: 5px;
    right: 5px;
  }
  
`;

const Form: React.FC<IForm> = ({
  // children,
  // formName,
  // formDescription,
  // form_fields,
  // form_buttons,

  files,
}) => {
  const { jsonFiles } = useStore.getState();

  console.log("testfiles", jsonFiles);

  const [closed, setClosed] = React.useState(true);
  const toggleForm = () => setClosed((prevToggle) => !prevToggle);



  return (
    <>

      {closed && (
          <Container>
            <div className={'closeBtn'}> <CloseButton onClick={toggleForm}  /></div>


            <h2>{files.form_name}</h2>

            <h3>{files.form_Description}</h3>


            <div className={"formFields"}>
              {files.form_fields.map((f: any, index:any) => (
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
