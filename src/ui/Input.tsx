import React, {useState} from "react";

interface IInput {
    type:string,
    value?:string|number,
    validate?:any,
    onUpdate?:any,
    isDisabled?:boolean

    /// Продумать над типами

}


const Input:React.FC<IInput> = ({ type, validate, onUpdate, isDisabled, }) => {
    const [value, setValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onError = (errorMessage:string) => {
        setErrorMessage(errorMessage)
    };

    const onInputHandler = ({ target } :any):any => {
        const { value } = target;

        setValue(value);

        if (validate && validate(value, onError)){
            onUpdate(type, value);
        }else {
            onUpdate(type,'')
        }
    };

    return(
        <>
            <input  disabled={isDisabled} type={type} value={value} onInput={onInputHandler}/>
            {errorMessage && <span style={{color:'red'}}>{errorMessage}</span>}
        </>
    )
};


export default Input;