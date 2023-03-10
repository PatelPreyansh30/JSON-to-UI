import { useState } from "react";
import "../style/previewField.css";
import { Button, Divider } from "@mui/material";
import InputUiType from "./InputUiType";
import GroupUiType from "./GroupUiType";
import SelectUiType from "./SelectUiType";
import SwitchUiType from "./SwitchUiType";
import ToggleSwitch from "./ToggleSwitch";

const PreviewField = (props: { jsonData: any; isJsonData: boolean }) => {
  const [inputData, setInputData] = useState({});

  const handleSubmit = () => {
    console.log(inputData);
  };

  const handleCancel = () => {
    setInputData({});
  };

  return (
    <>
      {props.isJsonData ? (
        <div className="previewField-main">

          {/* Dynamically generate heading name */}
          <h2 style={{ margin: "10px" }}>
            Create {props.jsonData[0].label.split(" ")[0]}
          </h2>
          <Divider sx={{ margin: "10px" }} />

          {/* Iterate and checking of UI type and envoke respective UI component */}
          {props.jsonData.map((item: any, index: any) => (
            <div key={`preview: ${index}`} className="gray-background">
              {item.uiType === "Input" && (
                <InputUiType
                  data={item}
                  class="h5-font"
                  setInputData={setInputData}
                />
              )}
              {item.uiType === "Group" && (
                <GroupUiType
                  data={item}
                  class="h5-font"
                  setInputData={setInputData}
                />
              )}
              {item.uiType === "Select" && (
                <SelectUiType
                  data={item}
                  class="h5-font"
                  setInputData={setInputData}
                />
              )}
              {item.uiType === "Switch" && (
                <SwitchUiType
                  data={item}
                  class="h5-font"
                  setInputData={setInputData}
                />
              )}
            </div>
          ))}
          
          {/* Common part for all UI (divider and buttons) */}
          <Divider sx={{ margin: "10px" }} />
          <div
            className="flex justify-content-space-between align-items-center"
            style={{ padding: "0 10px" }}
          >
            <ToggleSwitch />
            <div className="flex justify-content-center align-items-center">
              <Button
                onClick={handleCancel}
                variant="outlined"
                sx={{ marginRight: "5px" }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{ marginLeft: "5px" }}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      ) : (
        // For error handling (Invalid JSON, Enter JSON)
        <h3
          className="previewField-main"
          style={{ textAlign: "center", padding: "20px" }}
        >
          {props.jsonData}
        </h3>
      )}
    </>
  );
};

export default PreviewField;
