import Form from "./Form";

function FormSection({ generalInfo, education, experience, onChange, colors }) {
  return (
    <section className="form-section">
      <Form
        generalInfo={generalInfo}
        education={education}
        experience={experience}
        onChange={onChange}
        colors={colors}
      />
    </section>
  );
}

export default FormSection;
