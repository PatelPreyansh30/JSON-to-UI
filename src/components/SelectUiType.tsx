import {
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
} from "@mui/material";

const SelectUiType = (props: {
  data: any;
  class?: string | "";
  setInputData: any;
}) => {
  const handleOnChange = (e: SelectChangeEvent) => {
    const { value, name } = e.target;
    props.setInputData((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="width-100 flex align-items-center justify-content-space-between flex-wrap m10">
      <label htmlFor={props.data.jsonKey} className={`${props.class} m10`}>
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
      <FormControl size="small">
        <InputLabel id="demo-simple-select-label">
          {props.data.label}
        </InputLabel>
        <Select
          name={props.data.jsonKey}
          id={props.data.jsonKey}
          defaultValue={props.data.validate.defaultValue}
          labelId="demo-simple-select-label"
          label={props.data.label}
          onChange={(e: SelectChangeEvent) => handleOnChange(e)}
        >
          {props.data.validate.options.map((option: any, index: any) => (
            <MenuItem key={`options: ${index}`} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectUiType;
