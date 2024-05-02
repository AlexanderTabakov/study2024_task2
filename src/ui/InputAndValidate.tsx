import React, {useState} from 'react';
import styled from "styled-components";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

interface IInput {
    id: string,
    type: string,
    label: string,
    required: boolean,
    placeholder?: string,
    maxlength: number,
    minlength?: number,
    pattern?:string,

}

const Container = styled.div`
    position: relative;    


    .placeHolderSpan{
        position: absolute;
        opacity: 1;
    }
    
    .input {
        width: clamp(250px, 5vw, 482px);
        height: clamp(30px, 2vw, 56px);
        //styleName: 16 Paragraph 2;
        font-family: Roboto,sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;

        border: none;
        box-shadow: 0 4px 4px 0 #3333330A;
        
    }:focus{
        box-shadow: 0 4px 24px 0 #3333333D;
        border: none ;
    
         }
    
    .inputError{
        width: clamp(250px, 5vw, 482px);
        height: clamp(30px, 2vw, 56px);
        background-color: #F9E3E3;
        border: none;
        box-shadow: 0 4px 4px 0 #3333330A;
        font-family: Roboto,sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
    }    
    
     &:focus-within  {
         .placeHolderSpan{
             position: absolute;
             opacity: 1;
         }
     }

    .errorText {
        position: absolute;
        color: #DB524E;
        bottom: -20px;
        left: 0;
    }
    
    
`


const InputAndValidate:React.FC<IInput> = (
    {id,
        type,
        label ,
        required,
        placeholder,
        maxlength,
        minlength,
        pattern}
) => {



    const [value, setValue] = React.useState('');
    const [errorMessage, setErrorMessage] = useState('');




    const onInputHandler  = (e:Event) => {

        const inputValue = (e.target as HTMLInputElement).value;
        setValue(inputValue);
        console.log("inputValue",value);
    }


    const onErrorTest = () => {

        if(value.match(pattern)) {
            setErrorMessage('');
        } else{
            setErrorMessage('Incorrect pattern');
        }
        return false
    }


    const testInput = () => {
        onInputHandler(event);
        onErrorTest()
    }


    return (

        <>
            <Container>

            <label style={{opacity:0, position:'absolute'}} htmlFor={id}> {label}</label>

                <span className={'placeHolderSpan'}>{placeholder}</span>
                <input className={errorMessage? 'inputError' : 'input' } type={type} id={id}  maxLength={maxlength} minLength={minlength}
                       required={required} onChange={testInput}/>

            {errorMessage && <span className={'errorText'} >{errorMessage}</span>}


            </Container>

        </>
    );
};

export default InputAndValidate;
