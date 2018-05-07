import React from "react";

export default function ColorChanger(props) {
  return (
    <select
      onChange={props.updateColor}
      disabled={props.allowEdit === "false"}
      className="dropDownContainer"
    >
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
    </select>
  );
}
