import Education from "./Education";
import GeneralInfo from "./GeneralInfo";
import Experience from "./Experience";

function Form({ generalInfo, education, experience, onChange, colors }) {
  return (
    <form className="form">
      <GeneralInfo
        generalInfo={generalInfo}
        onChange={onChange}
        colors={colors}
      />
      <Education education={education} onChange={onChange} />
      <Experience experience={experience} onChange={onChange} />
    </form>
  );
}

export default Form;
