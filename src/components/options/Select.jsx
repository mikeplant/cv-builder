function Select({ options, optionHandlers }) {
  return (
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
  );
}

export default Select;
