import FileInput from "ui/FileInput";
import InputAndValidate from "ui/InputAndValidate";
import Popup from "ui/PopUp";
import SelectCustom from "ui/SelectCustom";
import FileTab from "ui/FileTab";
import Form from "components/Form";
import CheckBoxCustom from "ui/CheckboxCustom";
import useStore from "store";

const MainPage = () => {
  const { getState } = useStore;
  const test = getState().jsonFiles;

  return (
    <>
      {/*<Popup openTitle={'TESTING'}/>*/}
      <FileInput />
      {/*<InputAndValidate pattern={"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"} id={'test'} type={'text'} label={'enter a password'} required={true} placeholder={'enter a password'} maxlength={30}/>*/}
      {/*<Button type={'submit'}  name={'name'}> {'name'} </Button>*/}
      {/*<SelectCustom/>*/}

      {/*{test.map((f:any)=> {*/}
      {/*    <Form key={f.name} form_fields={f.form_fields} form_buttons={f.buttons} formDescription={f.description} formName={f.name} />*/}
      {/*})}*/}

      <Form></Form>
      {/*<CheckBoxCustom id={'test'} name={'Test'}/>*/}
      {/*<SelectCustom/>*/}

      {/*<FileTab/>*/}
    </>
  );
};

export default MainPage;
