import Form from "./Form";

function FormSection({ generalInfo, education, experience, onChange }) {
  return (
    <section className="form-section">
      <Form
        generalInfo={generalInfo}
        education={education}
        experience={experience}
        onChange={onChange}
      />
    </section>
  );
}

export default FormSection;
