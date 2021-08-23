import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <div className = "top">
        <h1 className="title">
          Virtual <a>Seoul</a>
        </h1>

        <p className="description">
        Content Managmant System
        </p>

        </div>

        <p className="info">
        서울관광재단이 발급한 아이디와 비밀번호로 로그인 해주세요.
        </p>

        <div className="grid">
          <div className="card">
            <h3>Login &rarr;</h3>
            <br/>

            <input className="input_login" type="text" placeholder = "ID"></input>
            <input className="input_login" type="password" placeholder = "PW"></input>
            <br/>
            <input className="remember_checkbox" type="checkbox"  id = "Remember" name="Remember"></input>
            <label className= "Remember" for="Remember">아이디 기억하기</label>
            <br/>
            <br/>
            <input className="submit_login" type="button" value = "Submit"></input>
            
          </div>
        </div>

        <p className="forget">
        비밀번호를 잃어버리신 경우 서울관광재단으로 연락주세요.
        <br/>
        vsp@sto.or.kr
        </p>

      </main>

      <footer/>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          font-family: 'Noto Sans KR', sans-serif;
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          
        }

        .input_login {
          border: 2px solid #C0C0C5;
          box-sizing: border-box;
          border-radius: 2px;
          width: 260px;
          height: 40px;
          margin : 5px;
          padding : 10px;
          font-family: 'Noto Sans KR', sans-serif;
          font-size: 13px;
          line-height: 22px;
        }

        .input_login:hover,
        .input_login:focus,
        .input_login:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .remember_checkbox {
          border: 0.98604px solid #C4C4C4;
          box-sizing: border-box;
          border-radius: 2px;
        }

        .submit_login {
          width: 260px;
          height: 40px;
          margin : 5px;
          padding : 10px;
          
          background: #252525;
          border-radius: 1.97208px;

          color : #ffffff;
        }

        .submit_login:hover,
        .submit_login:focus,
        .submit_login:active {
          border-color: #0070f3;
          background : #0070f3;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .top {
          background-color : #ededed;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title {
          margin: 10;
          line-height: 1.5;
          font-size: 4.5rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .info {
          text-align: center;
          line-height: 5;
          font-size: 1.2rem;
        }

        .forget {
          text-align: center;
          line-height: ;
          font-size: 0.8rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }

        .card {
          width : 380px;

          margin: 1rem;

          padding: 3rem;
          text-align: ;
          color: inherit;
          text-decoration: none;
          border: 2px solid #eaeaea;
          border-radius: 2px;
          transition: color 0.15s ease, border-color 0.15s ease;
          
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
      `}</style>

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
