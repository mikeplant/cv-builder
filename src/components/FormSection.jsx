import Form from "./Form";

function FormSection({ generalInfo, education, onChange }) {
  return (
    <section className="form-section">
      <Form
        generalInfo={generalInfo}
        education={education}
        onChange={onChange}
      />
    </section>
  );
}

export default FormSection;
