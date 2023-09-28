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
  options,
}) {
  return (
    <form
      className="form"
      onKeyDown={(e) => {
        e.key === "Enter" && e.preventDefault();
      }}
    >
      <Options optionHandlers={optionHandlers} options={options} />
      <GeneralInfo
        generalInfo={generalInfo}
        onChange={onChange}
        options={options}
      />
      <Education education={education} onChange={onChange} />
      <Experience experience={experience} onChange={onChange} />
    </form>
  );
}

export default Form;
