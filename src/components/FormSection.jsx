import Form from "./Form";

function FormSection({
  generalInfo,
  education,
  experience,
  onChange,
  optionHandlers,
  options,
}) {
  return (
    <section className="form-section">
      <Form
        generalInfo={generalInfo}
        education={education}
        experience={experience}
        onChange={onChange}
        optionHandlers={optionHandlers}
        options={options}
      />
    </section>
  );
}

export default FormSection;
