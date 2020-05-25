import Head from 'next/head'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScheduleDemo from '../../containers/ScheduleDemo';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Leena.AI - Schedule Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <ScheduleDemo />
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          flex: 1;
          width: 100%;
          margin-top: 80px;
          padding: 0px 0px;
          max-width: 1100px;
        }

        footer {
          width: 100%;
          border-top: 1px solid #eaeaea;
        }
        @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap'); 
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        .pointer {
          cursor: pointer;
        }
        .center {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .halfBackground {
          position: relative;
        }

        .halfBackground:before {
            content: "";
            width: 100%;
            height: 40%;
            position: absolute;
            bottom: 0px;
            left: 0px;
            background: #00CEFF;
            opacity: 0.2;
            z-index: -1;
          }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
