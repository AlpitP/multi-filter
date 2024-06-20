import React, { Fragment, useState } from "react";
import { tableData } from "../utils/tableData";
import Table from "./Table";

const Filters = () => {
  const [filterData, setFilterData] = useState([]);
  const a = Object.keys(tableData[0]);

  const filter = a.reduce((acc, ele) => {
    acc.push({ [ele]: Array.from(new Set(tableData[0][ele])) });
    return acc;
  }, []);

  const onChange = (e, ele) => {
    const { checked, value } = e.target;
    checked
      ? setFilterData([...filterData, value])
      : setFilterData(filterData.filter((ele) => ele !== value));
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: 30 }}>
        {a.map((ele, i) => {
          return (
            <div key={i}>
              <h4 style={{ margin: 0, padding: 0 }}>{ele}</h4>
              {ele === "Name" ? (
                <input
                  type="text"
                  onChange={(e) =>
                    setFilterData([...filterData, e.target.value])
                  }
                />
              ) : (
                filter[i]?.[ele]?.map((element, index) => {
                  return (
                    <Fragment key={index}>
                      <input
                        type="checkbox"
                        name={element}
                        value={element}
                        onChange={
                          (e) => onChange(e, ele)
                          // setFilterData([...filterData, { [ele]: element }])
                        }
                      />
                      <label>{element}</label>
                      <br />
                    </Fragment>
                  );
                })
              )}
            </div>
          );
        })}
      </div>
      <Table filterData={filterData} />
    </>
  );
};

export default Filters;
