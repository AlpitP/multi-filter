import React, { useState } from "react";
import usersData from "../utils/user.js";
import AllCheckboxes from "./AllCheckboxes.js";
import Table from "./Table.js";

const MultiFilterTable = () => {
  const [inputValue, setInputValue] = useState("");
  const [tableData, setTableData] = useState({});
  const [filteredData, setFilteredData] = useState(usersData);

  const initializeToggleData = () => {
    const object = structuredClone(tableData);

    usersData.forEach((user) =>
      Object.keys(user).forEach((field) => {
        if (object[field]?.length !== 0) {
          object[field] = [];
        }
      })
    );
    setTableData(object);
  };

  if (Object.keys(tableData).length === 0) {
    initializeToggleData();
  }

  const handleChange = (event, type) => {
    const target = event.target;
    const value = event.target.value.toLowerCase();

    const changeTableData = (prevState) => ({
      ...prevState,
      [type]: target.checked
        ? [...(prevState[type] || []), value]
        : (prevState[type] || []).filter((val) => val !== value),
    });

    const finalTableData = changeTableData(tableData);

    setTableData(finalTableData);
    setFilteredData(applyFilteredData(finalTableData));
  };

  const applyFilteredData = (tableData) => {
    const finalData = usersData.filter((user) => {
      return Object.entries(tableData).every(([field, array]) => {
        return array.length === 0 || array.includes(user[field]?.toLowerCase());
      });
    });

    return finalData;
  };

  const handleInputChange = (event) => setInputValue(event.target.value);

  const data = filteredData.filter((user) => {
    return user?.name.toLowerCase().includes(inputValue.trim().toLowerCase());
  });

  return (
    <div>
      <AllCheckboxes onChange={handleChange} />
      <div style={{ marginLeft: "45%", marginBlock: 20 }}>
        <span>Name: </span>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search by Name"
        />
      </div>
      <Table usersData={data} />
    </div>
  );
};

export default MultiFilterTable;
