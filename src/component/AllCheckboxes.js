import React, { useEffect } from "react";
import usersData from "../utils/user";
import Checkbox from "./Checkbox";

const checkboxes = {};
const AllCheckBoxes = ({ onChange, inputValue, isInput }) => {
  useEffect(() => {
    usersData.forEach((user) => {
      Object.entries(user).forEach(([key, value]) => {
        if (key === "id" || !value) {
          return;
        }
        if (!checkboxes[key]) {
          checkboxes[key] = [value];
        } else if (!checkboxes[key].includes(value)) {
          checkboxes[key].push(value);
        }
      });
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 20,
        marginBlock: 20,
      }}
    >
      {Object.entries(checkboxes).map(([field, fieldValues]) => {
        return isInput.includes(field) ? (
          <div key={field}>
            <h3 style={{ margin: 0 }}>{field.toUpperCase()} </h3>
            <input
              type="text"
              name={field}
              value={inputValue[field]}
              onChange={onChange}
              placeholder={`Search by ${field}`}
            />
          </div>
        ) : (
          <div key={field}>
            <h3 style={{ margin: 0 }}>{field.toUpperCase()}</h3>
            {fieldValues.map((checkbox, index) => (
              <Checkbox
                key={index}
                label={checkbox}
                name={field}
                onChange={onChange}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default AllCheckBoxes;
