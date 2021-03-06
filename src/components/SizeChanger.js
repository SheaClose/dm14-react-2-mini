import React from "react";

export default function SizeChanger(props) {
  return (
    <select
      onChange={props.updateSize}
      disabled={props.allowEdit === "false"}
      className="dropDownContainer"
    >
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
    </select>
  );
}
