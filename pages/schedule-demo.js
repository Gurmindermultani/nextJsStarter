import Head from 'next/head'
import Header from '../components/Header';
import ScheduleDemo from '../containers/ScheduleDemo';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Schedule live product demo | Leena AI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Book your live demo with product experts at Leena AI and discover how Leena AI can transform your employee experience."></meta>
        <meta name="keywords" content="Leena AI demo, Leena AI schedule demo, Leena AI live demo, Leena AI product demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes"></meta>
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
        }

        footer {
          width: 100%;
          border-top: 1px solid #eaeaea;
          background-image: linear-gradient(#F2FCFF, #ffffff);
        }
      `}</style>
    </div>
  )
}
