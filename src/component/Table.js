import React, { useEffect } from "react";

const fields = [];
const Table = ({ usersData }) => {
  useEffect(() => {
    usersData.forEach((user) => {
      Object.keys(user).forEach(
        (field) => !fields.includes(field) && fields.push(field)
      );
    });
  }, []);

  if (!usersData.length) {
    return <h2 style={{ textAlign: "center" }}>No Data Available!</h2>;
  }

  return (
    <table>
      <thead>
        <tr>
          {fields?.map((field, index) => {
            return <th key={index}>{field.toUpperCase()}</th>;
          })}
        </tr>
      </thead>

      <tbody>
        {usersData.map((user, index) => (
          <tr key={index}>
            {fields?.map((field) => (
              <td key={field}>{user?.[field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
