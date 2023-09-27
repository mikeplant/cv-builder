function GeneralInfo({ generalInfo, onChange, colors }) {
  return (
    <div className="general-info-form-section">
      <legend>General Info</legend>
      <label>
        Name:
        <input
          type="text"
          defaultValue={generalInfo.name}
          onChange={onChange.name}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          defaultValue={generalInfo.address}
          onChange={onChange.address}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          defaultValue={generalInfo.email}
          onChange={onChange.email}
        />
      </label>
      <label>
        Phone:
        <input
          type="phone"
          defaultValue={generalInfo.phone}
          onChange={onChange.phone}
        />
      </label>
      <div className="color-input-container">
        Accent
        <div className="color-frame">
          <input
            type="color"
            className="color-input"
            defaultValue={colors.background}
            onChange={onChange.backgroundColor}
          ></input>
        </div>
        Text
        <div className="color-frame">
          <input
            type="color"
            className="color-input"
            defaultValue={colors.text}
            onChange={onChange.textColor}
          ></input>
        </div>
      </div>
      <div className="divider-line"></div>
    </div>
  );
}

export default GeneralInfo;
