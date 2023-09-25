import Education from "./Education";
import GeneralInfo from "./GeneralInfo";
import Experience from "./Experience";

function Form({ generalInfo, education, onChange }) {
  return (
    <form className="form">
      <GeneralInfo generalInfo={generalInfo} onChange={onChange} />
      <Education education={education} />
      <Experience />
    </form>
  );
}

export default Form;
