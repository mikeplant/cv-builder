import "../../styles/Options.css";
import OpenOptions from "./OpenOptions";

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
        <OpenOptions optionHandlers={optionHandlers} options={options} />
      )}
    </div>
  );
}

export default Options;
