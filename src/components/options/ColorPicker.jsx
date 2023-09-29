function ColorPicker({ options, optionHandlers }) {
  return (
    <>
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
            defaultValue={options.backgroundColor}
            onChange={optionHandlers.changeColor}
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
            defaultValue={options.textColor}
            onChange={optionHandlers.changeColor}
          ></input>
        </div>
      </div>
    </>
  );
}

export default ColorPicker;
