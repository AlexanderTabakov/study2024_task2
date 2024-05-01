import React, {useState, useEffect} from 'react';

interface IInput {
    id: string,
    type: string,
    label: string,
    required: boolean,
    placeholder: string,
    maxlength: number,
    pattern?:string
}

const InputAndValidate:React.FC<IInput> = (
    {id,
        type,
        label ,
        required,
        placeholder,
        maxlength,
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
            <label htmlFor={id}> {label}</label>
            <input type={type} id={id} placeholder={placeholder} maxLength={maxlength} required={required} onChange={testInput}/>
            {errorMessage && <span style={{color:'red'}}>{errorMessage}</span>}

        </>
    );
};

export default InputAndValidate;
