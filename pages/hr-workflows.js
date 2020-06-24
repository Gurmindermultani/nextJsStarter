import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import HrWorkflows from '../containers/Products/HrWorkflows';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Automate HR workflows and employee request management | Leena AI </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Make employee request management simple with AI-enabled HR workflows. Take employee self service one notch up with enterprise conversations."></meta>
        <meta name="keywords" content="HR workflows, HR workflow automation, Grievance management software, employee request management, ‎employee self service platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes"></meta>
      </Head>
      <Header />
      <main>
        <HrWorkflows />
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
