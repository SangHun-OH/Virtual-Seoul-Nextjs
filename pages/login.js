import Head from 'next/head'

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
        Content Managemant System
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
