function GeneralInfo({ generalInfo, onChange, colors }) {
  return (
    <div className="general-info-form-section">
      <legend>General Info</legend>
      <label>
        Name:
        <input
          id="name"
          data-type="name"
          type="text"
          defaultValue={generalInfo.name}
          onChange={onChange.updateGeneralInfo}
        />
      </label>
      <label>
        Address:
        <input
          data-type="address"
          type="text"
          defaultValue={generalInfo.address}
          onChange={onChange.updateGeneralInfo}
        />
      </label>
      <label>
        Email:
        <input
          data-type="email"
          type="text"
          defaultValue={generalInfo.email}
          onChange={onChange.updateGeneralInfo}
        />
      </label>
      <label>
        Phone:
        <input
          data-type="phone"
          type="phone"
          defaultValue={generalInfo.phone}
          onChange={onChange.updateGeneralInfo}
        />
      </label>
      <div className="color-input-container">
        Accent
        <div className="color-frame">
          <input
            data-type="backgroundColor"
            type="color"
            className="color-input"
            defaultValue={colors.backgroundColor}
            onChange={onChange.changeColor}
          ></input>
        </div>
        Text
        <div className="color-frame">
          <input
            data-type="textColor"
            type="color"
            className="color-input"
            defaultValue={colors.textColor}
            onChange={onChange.changeColor}
          ></input>
        </div>
      </div>
      <div className="divider-line"></div>
    </div>
  );
}

export default GeneralInfo;
