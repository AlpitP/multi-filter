import React from "react";
import { data } from "../utils/tableData";

const Table = ({ filterData, a }) => {
  const condition = (data) => {
    let condition = [];
    for (let i = 0; i < a.length; i++) {
      if ([a[i]][0] !== "Name") {
        condition.push(filterData[0]?.[a[i]]?.includes(data?.[a[i]]) ?? true);
      } else {
        condition.push(
          filterData[0]?.[a[i]]?.length > 0
            ? data?.Name?.toLowerCase()?.includes(filterData[0]?.[a[i]])
            : true
        );
      }
    }
    return condition;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {/* <th>No.</th> */}
            {/* {Object.keys(tableData[0]).map((ele, index) => {
              return <th key={index}>{ele}</th>;
            })} */}
            <th>No.</th>
            {a.map((ele, i) => {
              return <th key={i}>{ele}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((ele, i) => {
            if (condition(ele).every((ele) => ele === true)) {
              return (
                <tr style={{ textAlign: "center" }} key={i}>
                  {Object.values(ele).map((ele, i) => {
                    return <td key={i}>{ele}</td>;
                  })}
                </tr>
              );
            }
            return null;
          })}

          {/* {tableData[0].City.map((ele, i) => {
            const data = a.reduce((acc, ele) => {
              acc.push(tableData[0]?.[ele]?.[index - 1]);
              return acc;
            }, []);

            const condition = () => {
              let condition = [];
              for (let i = 0; i < a.length; i++) {
                if ([a[i]][0] !== "Name") {
                  condition.push(
                    filterData[0]?.[a[i]]?.includes(data[i]) ?? true
                  );
                } else {
                  condition.push(
                    filterData[0]?.[a[i]]?.length > 0
                      ? data[i].toLowerCase()?.includes(filterData[0]?.[a[i]])
                      : true
                  );
                }
              }
              return condition;
            };

            if (condition().every((ele) => ele === true)) {
              return (
                <tr style={{ textAlign: "center" }} key={i}>
                  <td>{index++}</td>
                  {data.map((ele, i) => {
                    return <td key={i}>{ele}</td>;
                  })}
                </tr>
              );
            } else {
              index++;
            }
          })} */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
