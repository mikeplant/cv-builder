import Form from "./Form";

function FormSection({ generalInfo, onChange }) {
  return (
    <section className="form-section">
      <Form generalInfo={generalInfo} onChange={onChange} />
    </section>
  );
}

export default FormSection;
