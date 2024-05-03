import FileInput from "ui/FileInput";
import Form from "components/Form";
import useStore from "store";
import React from "react";
import styled from "styled-components";


const jsonTest = {
  "form_name": "Регистрация",
  "form_description": "Присоединяйтесь к нам!",
  "form_fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Имя",
      "required": true,
      "placeholder": "Введите ваше имя",
      "maxlength": 50
    },
    {
      "id": "email",
      "type": "text",
      "label": "Электронная почта",
      "required": true,
      "placeholder": "Введите ваш адрес электронной почты",
      "maxlength": 100,
      "pattern": "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
    },
    {
      "id": "password",
      "type": "password",
      "label": "Пароль",
      "required": true,
      "placeholder": "Введите пароль",
      "maxlength": 50,
      "minlength": 8,
      "pattern": "^(?=.*[a-zA-Z])(?=.*[0-9!@#$%^&*()]).{8,50}$"
    },
    {
      "id": "confirm_password",
      "type": "password",
      "label": "Повторите пароль",
      "required": true,
      "placeholder": "Повторите пароль",
      "maxlength": 50,
      "minlength": 8,
      "pattern": "^(?=.*[a-zA-Z])(?=.*[0-9!@#$%^&*()]).{8,50}$"
    }
  ],
  "form_buttons": [
    {
      "name": "Уже есть аккаунт?",
      "type": "button"
    },
    {
      "name": "Зарегистрироваться",
      "type": "submit"
    }
  ]
}

const Container = styled.main`
    display: flex;
  flex-direction: column;
  align-items: center;
  
`

const MainPage = () => {


  const { jsonFiles } = useStore.getState();




  console.log("jsOnfiles", jsonFiles);

  return (

    <Container>
      <FileInput />
      <Form files={jsonTest} />
    </Container>
  );
};

export default MainPage;
