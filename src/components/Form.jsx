import GeneralInfo from "./GeneralInfo";

function Form({ generalInfo, onChange }) {
  return (
    <form className="form">
      <GeneralInfo generalInfo={generalInfo} onChange={onChange} />
    </form>
  );
}

export default Form;
