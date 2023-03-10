import { useState } from "react";
import { Chip, Divider, Tooltip } from "@mui/material";
import IgnoreUiType from "./IgnoreUiType";
import RadioUiType from "./RadioUiType";
import SelectUiType from "./SelectUiType";
import SwitchUiType from "./SwitchUiType";
import ToggleSwitch from "./ToggleSwitch";

const GroupUiType = (props: {
  data: any;
  class?: string | "";
  setInputData: any;
}) => {
  const [radioButtonInput, setRadioButtonInput] = useState("");

  return (
    <div>
      {/* Labeling of group UI */}
      <label className={`${props.class}`}>
        {props.data.label}{" "}
        {props.data.validate.required && (
          <span className="input-required">*</span>
        )}
        {props.data.description && (
          <Tooltip title={props.data.description} arrow>
            <Chip label="i" size="small" />
          </Tooltip>
        )}
      </label>
      <Divider />

      {/* Iterat on group and load component based on the UI type */}
      {props.data.subParameters.map((subParameter: any, index: any) => (
        <div key={`group: ${index}`}>
          {subParameter.uiType === "Select" && (
            <SelectUiType
              data={subParameter}
              setInputData={props.setInputData}
            />
          )}
          {subParameter.uiType === "Switch" && (
            <SwitchUiType
              data={subParameter}
              setInputData={props.setInputData}
            />
          )}
          {subParameter.uiType === "Radio" && (
            <RadioUiType
              data={subParameter}
              setRadioButtonInput={setRadioButtonInput}
            />
          )}
          {subParameter.conditions?.map((condition: any) => (
            <div key={`radioCondition: ${index}`}>
              {radioButtonInput === condition.value && (
                <IgnoreUiType
                  data={subParameter}
                  radioButtonInput={radioButtonInput}
                  setInputData={props.setInputData}
                />
              )}
            </div>
          ))}
        </div>
      ))}
      <ToggleSwitch />
    </div>
  );
};

export default GroupUiType;
