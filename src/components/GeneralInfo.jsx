function GeneralInfo({ generalInfo, onChange, colors }) {
  return (
    <div key={generalInfo.id} className="form-inner-section">
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
      <label className="color-label">Colour:</label>
      <div className="color-input-container">
        <label htmlFor="accent-color" id="accent-color-label">
          Accent
        </label>
        <div className="color-frame">
          <input
            id="accent-color"
            data-type="backgroundColor"
            type="color"
            className="color-input"
            defaultValue={colors.backgroundColor}
            onChange={onChange.changeColor}
          ></input>
        </div>
        <label htmlFor="text-color" id="text-color-label">
          Text
        </label>
        <div className="color-frame">
          <input
            id="text-color"
            data-type="textColor"
            type="color"
            className="color-input"
            defaultValue={colors.textColor}
            onChange={onChange.changeColor}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
