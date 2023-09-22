function GeneralInfo() {
  return (
    <div className="general-info-form-section">
      <legend>General Info</legend>
      <label>
        Name:
        <input type="text" />
      </label>
      <label>
        Address:
        <input type="text" />
      </label>
      <label>
        Email:
        <input type="text" />
      </label>
      <label>
        Phone:
        <input type="phone" />
      </label>
      <div className="divider-line"></div>
    </div>
  );
}

export default GeneralInfo;
