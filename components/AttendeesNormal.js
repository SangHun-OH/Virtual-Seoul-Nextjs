import React, { useState } from "react";
import TablePagination from "./TablePagination";

const AttendeesNormal = () => {
  const title = [
    "idx",
    "Name",
    "ID(email)",
    "Job Title",
    "Organization",
    "Country",
    "Reset Password",
    "Confirm",
    "Edit",
  ];

  const [offset, setOffset] = useState(0);
  const totalCount = 28;
  const limit = 4;

  const rendering = () => {
    let result = [];
    for (let i = offset; i < offset + limit; i++) {
      result.push(
        <tr className="virtual-table-tr" key={i}>
          <td className="virtual-table-name">{i + 1}</td>
          <td className="virtual-table-name">Name{i + 1}</td>
          <td className="virtual-table-name">Email{i + 1}@gmail.com</td>
          <td className="virtual-table-name">Job{i + 1}</td>
          <td className="virtual-table-name">Organization{i + 1}</td>
          <td className="virtual-table-name">Country{i + 1}</td>
          <td className="virtual-table-name">
            <button>reset</button>
          </td>
          <td className="virtual-table-name">
            <button>confirm</button>
          </td>
          <td className="virtual-table-name">
            <button>edit</button>
          </td>
        </tr>
      );
    }

    return result;
  };

  const changeTableIndex = (idx) => {
    setOffset((idx - 1) * limit);
  };

  return (
    <div id="virtual-container">
      <table id="virtual-table">
        <thead>
          <tr>
            {title.map(function (obj, idx) {
              return (
                <th className="virtual-table-th" key={idx}>
                  {obj}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{rendering()}</tbody>
      </table>
      <div>
        <TablePagination
          totalCount={totalCount}
          limit={limit}
          offset={offset}
          changeTableIndex={changeTableIndex}
        ></TablePagination>
      </div>
      <button className="virtual-setting-btn">SAVE</button>
    </div>
  );
};

export default AttendeesNormal;
