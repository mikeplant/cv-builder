import Education from "./Education";
import GeneralInfo from "./GeneralInfo";
import Experience from "./Experience";
import Options from "./Options";

function Form({
  generalInfo,
  education,
  experience,
  onChange,
  optionHandlers,
  colors,
}) {
  return (
    <form
      className="form"
      onKeyDown={(e) => {
        e.key === "Enter" && e.preventDefault();
      }}
    >
      <Options optionHandlers={optionHandlers} />
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
