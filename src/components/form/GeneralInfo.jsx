function GeneralInfo({ generalInfo, onChange }) {
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
    </div>
  );
}

export default GeneralInfo;
