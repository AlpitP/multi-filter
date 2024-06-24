import React, { useEffect, useState } from "react";
import usersData from "../utils/user.js";
import AllCheckBoxes from "./AllCheckboxes.js";
import Table from "./Table.js";

const MultiFilterTable = () => {
  const [filterData, setFilterData] = useState({});
  const [tableData, setTableData] = useState(usersData);
  const isInput = ["name"];
  // const initializeToggleData = () => {
  //   const object = structuredClone(filterData);
  //   usersData.forEach((user) =>
  //     Object.keys(user).forEach((field) => {
  //       if (object[field]?.length !== 0) {
  //         object[field] = [];
  //       }
  //     })
  //   );
  //   setFilterData(object);
  // };

  useEffect(() => {
    setTableData(filterTableData(filterData));
  }, [filterData]);

  // if (Object.keys(filterData).length === 0) {
  //   initializeToggleData();
  // }

  const handleChange = (event) => {
    const { value, checked, name } = event.target;
    // const target = event.target;
    // const value = event.target.value;
    // const changeFilterData = (prevState) => ({
    //   ...prevState,
    //   [type]:
    //     type === "name"
    //       ? value
    //       : checked
    //       ? [...(prevState[type] || []), value]
    //       : (prevState[type] || []).filter((val) => val !== value),
    // });

    // const finalTableData = changeFilterData(filterData);

    setFilterData((prevState) => {
      return {
        ...prevState,
        [name]: isInput.includes(name)
          ? value
          : checked
          ? [...(prevState[name] || []), value]
          : (prevState[name] || []).filter((val) => val !== value),
      };
    });
  };

  const filterTableData = (filterData) => {
    const finalData = usersData.filter((user) => {
      return Object.entries(filterData).every(([field, fieldArray]) => {
        return isInput.includes(field)
          ? user?.[field]?.toLowerCase().includes(filterData[field])
          : fieldArray.length === 0 || fieldArray.includes(user[field]);
      });
    });

    return finalData;
  };

  // const handleInputChange = (event) => setInputValue(event.target.value);

  // const data = tableData.filter((user) => {
  //   return user?.name.toLowerCase().includes(inputValue.trim().toLowerCase());
  // });

  return (
    <div>
      <AllCheckBoxes
        onChange={handleChange}
        isInput={isInput}
        inputValue={filterData}
      />
      <Table usersData={tableData} />
    </div>
  );
};

export default MultiFilterTable;
