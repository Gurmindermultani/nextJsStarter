import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import WfhSurveys from '../containers/Products/WfhSurveys';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AI-powered work from home survey for remote employees | Leena AI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Monitor mental health, wellness, and engagement of your remote workforce. Conduct automated WFH employee pulse surveys on any platform you want."></meta>
        <meta name="keywords" content="work from home surveys, wfh surveys, work from home employee surveys, remote employee surveys, employee pulse survey, remote working survey, WFH survey for remote employees, wfh pulse surveys" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes"></meta>
      </Head>
      <Header />
      <main>
        <WfhSurveys />
      </main>

      <footer>
        <Footer />
      </footer>

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
          background: #f6fdff;
        }
      `}</style>
    </div>
  )
}
