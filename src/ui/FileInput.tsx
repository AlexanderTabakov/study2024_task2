import React, {useEffect, useRef, useState} from 'react';


const FileInput = () => {

   const [files, setFiles] = useState([])

    function printFiles(e:any) {
        const files = e.target.files;   // получаем все выбранные файлы

        for (let file of files) {        // Перебираем все выбранные файлы
            // создаем объект FileReader для считывания файла
            const reader = new FileReader();
            // при успешном чтении файла выводим его содержимое на веб-страницу
            reader.onload = () => {
                // выводим содержимое
                console.log(reader.result);
                setFiles([...files, reader.result])
                // для разделения, если выбрано несколько файлов
                console.log("==============================");

            };
            // считываем файл
            reader.readAsText(file);

        }
    }

    console.log(' filesState ',files, files.length)

    const fileInputRef = useRef()
    const clearFieldName = (e:any) => {
       setFiles([])
        // @ts-ignore
        fileInputRef.current.value = '';
    }




    return (
        <div>
            <input ref={fileInputRef} id={'input'} type='file' onChange={printFiles} multiple={true}  />

            <div>
                {files.map((f) => (
                    <div>{f.name}</div>
                ))}
            </div>

            <button onClick={clearFieldName}> Очистка поля </button>


        </div>
    );
};

export default FileInput;