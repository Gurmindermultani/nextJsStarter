import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Faq from '../containers/Products/Faq';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Automate employee query management with conversational AI | Leena AI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Automate your employee query management with AI-driven conversations. Get a virtual employee assistant and take a step ahead in HR automation."></meta>
        <meta name="keywords" content="employee query management, employee query resolution, employee query handling system, employee query automation, HR automation, AI in HR, employee faq automation, virtual employee assistant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes"></meta>
        <meta property="og:image" content="https://leena.ai/images/og/faq.png" />
        <meta property="og:title" content="Employee query management with conversational AI" />
        <meta property="og:description" content="Get a virtual employee assistant and take a step ahead in HR automation." />
        <meta property="og:url" content="https://leena.ai/employee-query-management" />
      </Head>
      <Header />
      <main>
        <Faq />
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
          background-image: linear-gradient(#F2FCFF, #ffffff);
        }
      `}</style>
    </div>
  )
}
