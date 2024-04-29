import React from "react";
import {App} from "app/App";
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import Input from "ui/Input";
import FileInput from "ui/FileInput";

const root = (
        <BrowserRouter>
            <Input  type={'text'} isDisabled={false}  onUpdate={()=> {
                console.log('111')}}   />

            <FileInput/>
        </BrowserRouter>
)

ReactDOM.render(
    root,
    document.getElementById('root')
);