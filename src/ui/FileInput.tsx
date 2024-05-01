import React, {useEffect, useRef, useState, useContext, createContext} from 'react';



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

    const fileInputRef = useRef<HTMLInputElement>()

    const clearFieldName = (e:Event) => {
       setFiles([])
        fileInputRef.current.value = '';
    }

    const deleteFile = (name:string) => {

       const filteredFiles = files.filter((file:any) => file.name!==name)
        setFiles(filteredFiles);
    }

    const FileContext = React.createContext(null)



    return (

        <div>
            <input ref={fileInputRef} id={'input'} type='file' onChange={printFiles} multiple={true}  />

            <div>
                {files.map((f) => (
                    <div key={f.name}>
                        {f.name}
                        <button onClick={()=>deleteFile(f.name)}>Удалить</button>
                    </div>

                ))}
            </div>



            <button onClick={()=>clearFieldName(event)}> Очистка поля </button>


        </div>
    );
};

export default FileInput;
