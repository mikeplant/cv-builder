import Education from "./Education";
import GeneralInfo from "./GeneralInfo";

function Form({ generalInfo, onChange }) {
  return (
    <form className="form">
      <GeneralInfo generalInfo={generalInfo} onChange={onChange} />
      <Education />
    </form>
  );
}

export default Form;
