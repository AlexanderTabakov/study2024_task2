import React, {useEffect} from 'react';
import styled from "styled-components";
import CloseButton from "ui/CloseButton";
import useStore from "store";
import InputAndValidate from "ui/InputAndValidate";
import Button from "ui/Button";





interface IForm {
    children?: React.ReactNode;
    formName?: string;
    formDescription?:string
    form_fields?:any
    form_buttons?:any
}

const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    
`



const Form:React.FC<IForm> = ({children, formName, formDescription, form_fields, form_buttons}) => {


   //  const {getState} = useStore
   // const testFiles = getState().jsonFiles

    const {jsonFiles} = useStore()



    console.log('testfiles',jsonFiles)

    return (

        jsonFiles.length > 2  && (
            <Container>

                <CloseButton/>

                {/*{testFiles.map((f:any, index:any) =>*/}
                {/*    <InputAndValidate key={index} id={f.id} type={f.type} label={f.label} required={f.required} maxlength={f.maxLength}/>*/}
                {/*)}*/}

                <h2>{formName}</h2>

                <h3>{formDescription}</h3>

                <div className={'formFields'}>

                    {form_fields.map((f:any)=>
                        <InputAndValidate
                            key={f.name}
                            id={f.id}
                            type={f.type}
                            label={f.label}
                            required={f.required}
                            maxlength={f.maxlength}
                            placeholder={f.placeholder}
                            pattern={f.formDescription}
                            minlength={f.minlength}/>)}
                </div>

                <div className={'formBtns'}>
                    {form_buttons.map((f:any)=> <Button key={f.name} type={f.type}/>)}
                </div>

                {children}

            </Container>
        )

    );
};

export default Form;
