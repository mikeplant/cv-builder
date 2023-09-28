import "../styles/Options.css";

function Options({ optionHandlers, options }) {
  return (
    <div className="form-inner-section options">
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
            Aa Default
          </option>
          <option className="serif-font" value="serif">
            Aa Serif
          </option>
          <option className="sans-serif-font" value="sans-serif">
            Aa Sans-Serif
          </option>
          <option className="mono-font" value="mono">
            Aa Monospace
          </option>
        </select>
      </label>
    </div>
  );
}

export default Options;
