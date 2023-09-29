import Buttons from "../options/Buttons";
import ColorPicker from "../options/ColorPicker";
import Select from "../options/Select";

function OpenOptions({ optionHandlers, options }) {
  return (
    <>
      <Buttons optionHandlers={optionHandlers} />
      <Select options={options} optionHandlers={optionHandlers} />
      <ColorPicker options={options} optionHandlers={optionHandlers} />
    </>
  );
}

export default OpenOptions;
