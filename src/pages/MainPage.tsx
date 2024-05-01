import FileInput from "ui/FileInput";
import InputAndValidate from "ui/InputAndValidate";

const MainPage = () => {

    return(
        <>
            <FileInput/>
            <InputAndValidate pattern={"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"} id={'test'} type={'text'} label={'enter a password'} required={true} placeholder={'enter a password'} maxlength={30}/>
        </>
    )

}

export default MainPage;
