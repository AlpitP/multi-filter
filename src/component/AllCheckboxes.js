import React from "react";
import Checkbox from "./Checkbox";
import usersData from "../utils/user";

const AllCheckboxes = ({ onChange }) => {
  const checkboxes = {};

  usersData.forEach((user) => {
    Object.entries(user).forEach(([key, value]) => {
      if (key === "id" || key === "name" || !value) {
        return;
      }

      if (!checkboxes[key]) {
        checkboxes[key] = [value];
      } else if (!checkboxes[key].includes(value)) {
        checkboxes[key].push(value);
      }
    });
  });

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
      {Object.entries(checkboxes).map(([field, array]) => {
        return (
          <div key={field}>
            <h3 style={{ margin: 0 }}>{field.toUpperCase()}</h3>
            {array.map((checkbox, ind) => (
              <Checkbox
                key={ind}
                label={checkbox}
                onChange={(event) => onChange(event, field)}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default AllCheckboxes;
