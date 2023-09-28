import "../styles/Options.css";

function Options({ optionHandlers }) {
  return (
    <div className="form-inner-section btn-section">
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
  );
}

export default Options;
