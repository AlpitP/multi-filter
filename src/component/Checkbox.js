import React from "react";

const Checkbox = ({ label, onChange, name }) => {
  return (
    <div>
      <input type="checkbox" onChange={onChange} value={label} name={name} />{" "}
      {label}
    </div>
  );
};

export default Checkbox;
