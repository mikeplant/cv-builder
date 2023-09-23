import Education from "./Education";
import GeneralInfo from "./GeneralInfo";
import Experience from "./Experience";

function Form({ generalInfo, onChange }) {
  return (
    <form className="form">
      <GeneralInfo generalInfo={generalInfo} onChange={onChange} />
      <Education />
      <Experience />
    </form>
  );
}

export default Form;
