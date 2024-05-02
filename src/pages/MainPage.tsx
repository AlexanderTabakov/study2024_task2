import FileInput from "ui/FileInput";
import InputAndValidate from "ui/InputAndValidate";
import Popup from "ui/PopUp";




const MainPage = () => {

    return(
        <>
            <Popup openTitle={'TESTING'}/>
            <FileInput/>
            <InputAndValidate pattern={"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"} id={'test'} type={'text'} label={'enter a password'} required={true} placeholder={'enter a password'} maxlength={30}/>
            {/*<Button type={'submit'}  name={'name'}> {'name'} </Button>*/}
        </>
    )

}

export default MainPage;
