import React, { Fragment, useState } from "react";
import { data } from "../utils/tableData";
import Table from "./Table";

const Filters = () => {
  const [filterData, setFilterData] = useState([]);
  const a = [];
  data.map((ele) => {
    for (let key in ele) {
      a.push(key);
    }
    return null;
  });

  for (const key in filterData[0]) {
    if (filterData[0]?.[key]?.length === 0) {
      delete filterData[0]?.[key];
    }
  }

  const filter = Array.from(new Set(a)).reduce((acc, current) => {
    // acc.push({ [ele]: Array.from(new Set(tableData[0][ele])) });
    acc.push({
      [current]: Array.from(new Set(data.map((ele) => ele[current]))),
    });
    return acc;
  }, []);

  const changeInput = (e) => {
    const { value, name } = e.target;
    setFilterData([
      {
        ...filterData[0],
        [name]: value,
      },
    ]);
  };
  const onChange = (e) => {
    const { checked, value, name } = e.target;
    checked
      ? setFilterData([
          {
            ...filterData[0],
            [name]: filterData?.[0]?.[name]
              ? [...filterData?.[0]?.[name], value]
              : [value],
          },
        ])
      : setFilterData([
          {
            ...filterData[0],
            [name]: filterData?.[0]?.[name].filter((ele) => ele !== value),
          },
        ]);
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: 30 }}>
        {Array.from(new Set(a)).map((ele, i) => {
          return (
            ele !== "id" && (
              <div key={i}>
                <h4 style={{ margin: 0, padding: 0 }}>{ele}</h4>
                {ele === "Name" ? (
                  <input
                    type="text"
                    name={ele}
                    value={filterData?.[0]?.Name ?? ""}
                    onChange={(e) => changeInput(e)}
                  />
                ) : (
                  filter[i]?.[ele]?.map((element, index) => {
                    return (
                      element !== undefined &&
                      element !== "" && (
                        <Fragment key={index}>
                          <input
                            type="checkbox"
                            name={ele}
                            value={element}
                            onChange={(e) => onChange(e)}
                          />
                          <label>{element}</label>
                          <br />
                        </Fragment>
                      )
                    );
                  })
                )}
              </div>
            )
          );
        })}
      </div>
      <Table filterData={filterData} a={Array.from(new Set(a))} />
    </>
  );
};

export default Filters;
