import React, {useState} from 'react';

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



    const onInputHandler  = (e:React.ChangeEvent<HTMLInputElement>) => {

        const inputValue = e.target.value
        setValue(inputValue);
        console.log("inputValue",value);
    }


    const onErrorTest = () => {

        if(value.match(pattern)) {
            setErrorMessage('');
        } else{
            setErrorMessage('Incorrect pattern');
        }
    }








    return (

        <>
            <label htmlFor={id}> {label}</label>
            <input type={type} id={id} placeholder={placeholder} maxLength={maxlength} required={required} onChange={onInputHandler}/>
            <button onClick={onErrorTest}>test</button>
            {errorMessage && <span style={{color:'red'}}>{errorMessage}</span>}

        </>
    );
};

export default InputAndValidate;
