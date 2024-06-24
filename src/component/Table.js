import React from "react";

const Table = ({ usersData }) => {
  const fields = [];
  usersData.forEach((user) => {
    Object.keys(user).forEach(
      (field) => !fields.includes(field) && fields.push(field)
    );
  });

  if (usersData.length === 0) {
    return <h2 style={{ textAlign: "center" }}>No Data Available!</h2>;
  }

  return (
    <table>
      <thead>
        <tr>
          {fields?.map((field, ind) => {
            return <th key={ind}>{field.toUpperCase()}</th>;
          })}
        </tr>
      </thead>

      <tbody>
        {usersData.map((user, ind) => (
          <tr key={ind}>
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
