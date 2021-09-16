import React from "react";
import TableBodyInput from "./TableBodyInput";

const PlatformContentsExhibitionHall = () => {
  const bannerTitle = [
    "① 왼쪽 배너 1",
    "② 왼쪽 배너 2",
    "③ 왼쪽 배너 3",
    "④ 왼쪽 배너 4",
    "⑤ 오른쪽 배너 1",
    "⑥ 오른쪽 배너 2",
    "⑦ 오른쪽 배너 3",
    "⑧ 오른쪽 배너 4",
  ];

  const videoTitle = ["① 홍보영상", "② 주최측부스 영상1", "③ 주최측부스 영상2"];

  return (
    <div id="virtual-container">
      <table id="virtual-table">
        <thead>
          <tr>
            <th className="virtual-table-th">메뉴 이름 변경</th>
            <th className="virtual-table-th">영문</th>
            <th className="virtual-table-th">한글</th>
          </tr>
        </thead>
        <tbody>
          <tr className="virtual-table-tr">
            <td className="virtual-table-name">Exhibition Hall / 전시홀</td>
            <td className="virtual-table-checkbox">
              <input type="text" />
            </td>
            <td className="virtual-table-checkbox">
              <input type="text" />
            </td>
          </tr>
        </tbody>
      </table>

      <table id="virtual-table">
        <tbody>
          {bannerTitle.map(function (obj, idx) {
            return (
              <TableBodyInput
                key={idx}
                title={obj}
                type="file"
              ></TableBodyInput>
            );
          })}
        </tbody>
      </table>

      <table id="virtual-table">
        <tbody>
          {videoTitle.map(function (obj, idx) {
            return (
              <TableBodyInput
                key={idx}
                title={obj}
                type="text"
              ></TableBodyInput>
            );
          })}
        </tbody>
      </table>
      <button className="virtual-setting-btn">SAVE</button>
    </div>
  );
};

export default PlatformContentsExhibitionHall;
