import React from 'react';
import styled from "styled-components";
import CloseButton from "ui/CloseButton";

interface IForm {
    children?: React.ReactNode;
    title?: string;
}

const Container = styled.div`
    
    display: flex;
    
`

const Form:React.FC<IForm> = ({children, title}) => {
    return (
        <Container>

            <CloseButton/>

            <h2>{title}</h2>

            {children}

        </Container>
    );
};

export default Form;
