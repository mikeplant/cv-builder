import Form from "./Form";

function FormSection({
  generalInfo,
  education,
  experience,
  onChange,
  optionHandlers,
  colors,
}) {
  return (
    <section className="form-section">
      <Form
        generalInfo={generalInfo}
        education={education}
        experience={experience}
        onChange={onChange}
        optionHandlers={optionHandlers}
        colors={colors}
      />
    </section>
  );
}

export default FormSection;
