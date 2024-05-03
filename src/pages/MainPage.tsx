import FileInput from "ui/FileInput";
import Form from "components/Form";
import useStore from "store";
import React, { useState } from "react";
import styled from "styled-components";

const jsonTest = {
  form_name: "Авторизация",
  form_fields: [
    {
      id: "login",
      type: "text",
      label: "Логин",
      required: true,
      placeholder: "Введите ваш логин",
      maxlength: 30,
    },
    {
      id: "password",
      type: "password",
      label: "Пароль",
      required: true,
      placeholder: "Введите ваш пароль",
      maxlength: 50,
      minlength: 8,
      pattern: "^(?=.*[a-zA-Z])(?=.*[0-9!@#$%^&*()]).{8,50}$",
    },
  ],
  form_buttons: [
    {
      name: "Войти",
      type: "submit",
    },
  ],
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainPage = () => {
  const [formValues, setFormValues] = useState({
    input1: "",
    input2: "",
    input3: "",
  });

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

  const { jsonFiles } = useStore.getState();

  console.log("jsOnfiles", jsonFiles);

  return (
    <Container>
      <FileInput />
      {jsonFiles &&
        jsonFiles.map((f: any) => (
          <Form
            key={f.key}
            files={jsonFiles}
            formDescription={f.description}
            formName={f.form_name}
          />
        ))}
      <Form files={jsonTest} />
    </Container>
  );
};

export default MainPage;
