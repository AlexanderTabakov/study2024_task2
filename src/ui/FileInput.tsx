import React, {useEffect, useRef, useState, useContext, createContext} from 'react';
import styled from "styled-components";
import Button from "ui/Button";
import FileTab from "ui/FileTab";
import Popup from "ui/PopUp";
import useStore from "store";
import {get} from "react-hook-form";




const Container = styled.form`
    display: flex;
    position: relative;
    flex-direction: column;
    height: clamp(450px, 30vw, 800px);
    width: clamp(300px, 40vw, 675px);
    
    
    .dragHover  {
        background-color: #6E41E2;
        background-image: url(/file.svg);
        background-repeat: no-repeat;
        background-position: center;
    }
    
    .labelForFileInput {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border: #6E41E2 solid 2px;
        width: clamp(300px, 40vw, 675px);
        height: clamp(45px, 30vw, 90px);      
        
        
    }

    .btnReset{
        position: absolute;
    }
    
    .fileList{
        display: flex;
        flex-direction: column;
    }
`



const FileInput = () => {

    // const{getState} = useStore
    // getState().jsonFiles

    const {getState} = useStore


   const [files, setFiles] = useState([])

    // getState().addJsonFiles(files)

    function printFiles(e:any) {
        const files = e.target.files;

        for (let file of files) {

            const reader = new FileReader();

            reader.onload = () => {

                setFiles([...files, reader.result])
                getState().addJsonFiles (reader.result)

            };

            reader.readAsText(file);

        }

    }

    console.log(' filesState ',files, files.length)

    const fileInputRef = useRef<HTMLInputElement>()

    const clearFieldName = (e:Event) => {
       setFiles([])
        fileInputRef.current.value = '';
    }

    const deleteFile = (name:string) => {

       const filteredFiles = files.filter((file:any) => file.name!==name)
        setFiles(filteredFiles);
        // getState().addJsonFiles (filteredFiles)

    }

    useEffect(() => {
        const dragNdropStyle = () => {
            const target = document.getElementById("testId");
            const input = document.getElementById("input");
            input.addEventListener("dragenter", (event) => {
                if ((event.target as HTMLInputElement).classList.contains("fileInput")) {
                    (target as HTMLDivElement).classList.add("dragHover");
                }
            });

            target.addEventListener("dragleave", (event) => {
                if ((event.target as HTMLInputElement).classList.contains("fileInput")) {
                    (target as HTMLDivElement).classList.remove("dragHover");
                }
            });

            console.log('event', event.target);
        }
        dragNdropStyle();
        return dragNdropStyle


    }, []);

    // getState().addJsonFiles (files)





    return (

        <Container >
            <div id={'testId'} className={'labelForFileInput'}>
            <label  htmlFor="input"> Нажмите или перетащите файлы </label>
            <input className={'fileInput'} style={{opacity:0, position:'absolute', width:'100%', height:'100%'}} draggable={true} ref={fileInputRef} id={'input'} type='file' onChange={printFiles} multiple={true}/>
            </div>


            <Popup openTitle={'RESET'}>
                <h2> Do you want reset? </h2>
                <Button style={{zIndex:'2'}}  type='button' onClick={()=>clearFieldName(event)}> RESET </Button> </Popup>

            <div className={'fileList'}>
                {files.map((f)=><FileTab key={f.name} name={f.name} onClick={()=>deleteFile(f.name)}/>)}
            </div>

        </Container>

    );
};

export default FileInput;
