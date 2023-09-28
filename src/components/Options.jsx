import "../styles/Options.css";

function Options({ optionHandlers, options }) {
  return (
    <div className="form-inner-section options">
      <div className="options-title-container">
        <legend
          className="options-title"
          style={{ paddingBottom: options.isCollapsed ? "0" : "14px" }}
        >
          Options
        </legend>
        <svg
          onClick={optionHandlers.toggleCollapsed}
          className="collapsable-svg push-right"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          transform={options.isCollapsed ? "" : "rotate(135)"}
        >
          <path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z" />
        </svg>
      </div>

      {options.isCollapsed ? (
        ""
      ) : (
        <>
          <div className="btn-section">
            <button
              className="options-btn clear-btn"
              onClick={optionHandlers.handleClearAll}
            >
              Clear All
            </button>
            <button
              className="options-btn load-demo-btn"
              onClick={optionHandlers.handleLoadDemo}
            >
              Load Demo
            </button>
            <button
              className="options-btn export-btn"
              onClick={optionHandlers.handleExport}
            >
              Export as PDF
            </button>
          </div>
          <label>
            Font Select:
            <select
              onChange={optionHandlers.changeFont}
              className="font-select"
              style={{ fontFamily: options.font }}
            >
              <option className="default-font" value="default">
                Aa | Default
              </option>
              <option className="serif-font" value="serif">
                Aa | Serif
              </option>
              <option className="sans-serif-font" value="sans-serif">
                Aa | Sans-Serif
              </option>
              <option className="mono-font" value="mono">
                Aa | Monospace
              </option>
            </select>
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
      )}
    </div>
  );
}

export default Options;
