import React from "react";
import { tableData } from "../utils/tableData";

const Table = ({ filterData }) => {
  let index = 1;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            {Object.keys(tableData[0]).map((ele, index) => {
              return <th key={index}>{ele}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {tableData[0].City.map((ele, i) => {
            const data = [
              tableData[0].City[i],
              tableData[0].Name[i],
              tableData[0].Category[i],
              tableData[0].Type[i],
              tableData[0].Active[i],
            ];
            if (data.includes(filterData[0])) {
              return (
                <tr style={{ textAlign: "center" }} key={i}>
                  <td>{index++}</td>
                  <td>{tableData[0].City[i]}</td>
                  <td>{tableData[0].Name[i]}</td>
                  <td>{tableData[0].Category[i]}</td>
                  <td>{tableData[0].Type[i]}</td>
                  <td>{tableData[0].Active[i]}</td>
                </tr>
              );
            }
            if (filterData.length === 0) {
              return (
                <tr style={{ textAlign: "center" }} key={i}>
                  <td>{i + 1}</td>
                  <td>{tableData[0].City[i]}</td>
                  <td>{tableData[0].Name[i]}</td>
                  <td>{tableData[0].Category[i]}</td>
                  <td>{tableData[0].Type[i]}</td>
                  <td>{tableData[0].Active[i]}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
