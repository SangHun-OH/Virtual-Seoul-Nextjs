import React from "react";
import TableBody from "./TableBody";
import TitleForm from "./TitleForm";

const VirtualVenue = ({ onChecked, checkBox }) => {
  const tableHead = ["구분", "가상 베뉴", "주요 기능", "선택"];
  const venues = [
    [
      {
        nameKR: "컨퍼런스 홀",
        nameEN: "Conference Hall",
        venueKR: "창덕궁",
        venueEN: "Changdeokgung Palace",
        venueName: "conference_active",
      },
      {
        nameKR: "오픈 스테이지",
        nameEN: "Open Stage",
        venueKR: "서울시청광장",
        venueEN: "Seoul City Hall",
        venueName: "open_stage_active",
      },
    ],
    [
      {
        nameKR: "보드룸",
        nameEN: "Boardroom",
        venueKR: "세빛섬",
        venueEN: "Some Sevit",
        venueName: "workshop_active",
      },
    ],
    [
      {
        nameKR: "전시홀",
        nameEN: "Exhibition Hall",
        venueKR: "코엑스",
        venueEN: "Coex",
        venueName: "exhibition_active",
      },
      // {
      //   nameKR: "야외전시장",
      //   nameEN: "Outdoor Exhibition Area",
      //   venueKR: "노들섬",
      //   venueEN: "Nodeul Island",
      //   venueName: "outdoor_exhibition_active",
      // },
    ],
    [
      {
        nameKR: "비즈니스 상담장",
        nameEN: "Business Meeting Room",
        venueKR: "서울관광플라자",
        venueEN: "Seoul Tourism Plaza",
        venueName: "business_room_active",
      },
    ],
    [
      {
        nameKR: "네트워킹 라운지",
        nameEN: "Networking Lounge",
        venueKR: "서울식물원",
        venueEN: "Seoul Botanic Park",
        venueName: "lounge_active",
      },
    ],
    [
      {
        nameKR: "씨어터",
        nameEN: "Theater",
        venueKR: "동대문디자인플라자",
        venueEN: "DDP",
        venueName: "theater_active",
      },
    ],
    [
      {
        nameKR: "홍보부스",
        nameEN: "Promotion Booth",
        venueKR: "남산서울타워",
        venueEN: "Namsan Seoul Tower",
        venueName: "seoul_booth_active",
      },
    ],
  ];
  const functions = [
    {
      main: "e-컨퍼런스 기능",
      detail: [
        "연사 강연 송출(라이브/VOD), 웨비나(Zoom)",
        "연사 정보 배너",
        "지나간 세션 다시보기",
      ],
    },
    {
      main: "여러 회의를 동시에 개최할 수 있는 분과회의장",
      detail: [
        "분과 세션 동시 진행(최대 10개)",
        "연사 강연 송출(라이브/VOD), 웨비나(Zoom)",
      ],
    },
    {
      main: "가상 전시장",
      detail: [
        "온라인 전시관 관람 및 부스 검색, 방문",
        "전시 부스 콘텐츠 열람(기업정보, 제품 쇼케이스, 홍보 영상, 라이브커머스, 브로셔 등)",
        "전시부스 참가사와 방문자간 1:1 채팅, 화상상담",
      ],
    },
    {
      main: "1:1 비즈니스 상담장(PSA)",
      detail: [
        "현재 상담 가능 리스트 확인 및 상담 신청",
        "별도 PSA 사전 매칭 시스템을 통해 바이어-셀러 간 상담 매칭",
        "행사 당일 ‘버추얼 서울’에서 매칭된 스케줄로 1:1 화상상담 운영",
      ],
    },
    {
      main: "참가자간 네트워킹 기능",
      detail: [
        "참가자간 그룹 채팅",
        "참가자 리스트 및 명함 정보 확인, 1:1 채팅",
        "미니게임 (한글 이름 카드 만들기)",
        "설문조사",
      ],
    },
    {
      main: "영상 상영관",
      detail: [
        "카테고리 별 영상 콘텐츠 시청",
        "최대 5개 카테고리, 카테고리 내 10개 영상 업로드 가능",
        "가상투어관, IR 피칭, e-포스터 세션 등 다양한 용도로 활용 가능",
      ],
    },
    {
      main: "홍보부스",
      detail: [
        "주최사(또는 행사, 스폰서 등)의 홍보 영상 시청, 브로셔 열람 및 다운로드, 웹사이트 연동 등",
      ],
    },
  ];

  const rendering = () => {
    const result = [];
    for (let i = 0; i < venues.length; i++) {
      result.push(
        <TableBody
          key={i}
          venues={venues[i]}
          functions={functions[i]}
          onChecked={onChecked}
          checkBox={checkBox}
        ></TableBody>
      );
    }
    return result;
  };

  return (
    <div>
      <TitleForm
        title="가상베뉴 선택"
        detail="행사에 필요한 가상베뉴와 기능을 선택하세요."
      ></TitleForm>
      <div id="virtual-container">
        <table id="virtual-table">
          <thead>
            <tr>
              {tableHead.map(function (obj, idx) {
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
      </div>
    </div>
  );
};

export default VirtualVenue;
