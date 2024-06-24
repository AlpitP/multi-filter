import React from "react";

const Checkbox = ({ label, onChange }) => {
  return (
    <div>
      <input type="checkbox" onChange={onChange} value={label} /> {label}
    </div>
  );
};

export default Checkbox;
