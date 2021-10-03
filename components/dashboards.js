import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Dash Boards</title>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <h2 className="info_list">
          Attendee List
          <input className="csv_button" type="button" value = "CSV 다운로드"></input>
        </h2>

        <div className="grid">
          <div className="card_attendee">
            <h3>일반 참가자</h3>
            <p>0명</p>
          </div>

          <div className="card_attendee">
            <h3>컨퍼런스 스피커</h3>
            <p>0명</p>
          </div>

          <div className="card_attendee">
            <h3>전시 참가 업체</h3>
            <p>0명</p>
          </div>

        </div>

        <h2 className="info_list">
          Analytics
        </h2>
        <div className="grid">
          <div className="card_analytics">
            <h3>전체 접속 유저</h3>
            <p>0명</p>
          </div>

          <div className="card_analytics">
            <h3>일일 접속 유저</h3>
            <p>0명</p>
          </div>

          <div className="card_analytics">
            <h3>업체 방문 유저</h3>
            <p>0명</p>
          </div>
          
        </div>
        <h2 className="info_list">
          Business Matching
        </h2>
        <div className="grid">
          <div className="card_business">
            <h3>바이어</h3>
            <p>0명</p>
          </div>
          <div className="card_business">
            <h3>셀러</h3>
            <p>0명</p>
          </div>
          <div className="card_business">
            <h3>매칭신청</h3>
            <p>0명</p>
          </div>
          <div className="card_business">
            <h3>매칭예약</h3>
            <p>0명</p>
          </div>

        </div>
      </main>

      <footer/>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Noto Sans KR', sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
