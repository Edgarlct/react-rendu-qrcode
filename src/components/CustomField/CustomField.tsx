import React from "react";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField
} from "@mui/material";

export default function CustomField(props: {label: string, type: string, icon: string, value: string, onChange: (value: string) => void, fullWidth?: boolean, filled?: boolean}) {
  return (
    <FormControl sx={{width: props.fullWidth ? "100%" : "25ch" }} variant="outlined">
      {
        !props.filled && <InputLabel htmlFor="outlined-adornment-password">{props.label}</InputLabel>
      }
      {
        props.filled
        ?
          <FilledInput
            type={props.type}
            value={props.value}
            onChange={(event) => props.onChange(event.target.value)}
            disableUnderline={true}
            placeholder={props.label}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  size={"small"}
                >
                  <span className="material-symbols-outlined mediumIcon">{props.icon}</span>
                </IconButton>
              </InputAdornment>
            }
          />
        :
          <OutlinedInput
            type={props.type}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton size={"small"}>
                  <span className="material-symbols-outlined">{props.icon}</span>
                </IconButton>
              </InputAdornment>
            }
            label={props.label}
          />
      }
    </FormControl>
  )
}
