import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../containers/HomePage';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Leena AI - Employee experience platform for enterprises</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Leena AI is an enterprise conversational AI that enhances employee experience via HR helpdesk automation and employee enagagement software. "></meta>
        <meta name="keywords" content="enterprise conversational AI, HR helpdesk, employee engagement platform, AI in HR, artificial intelligence in HR, employee engagement platform, employee service delivery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes"></meta>
      </Head>
      <Header />
      <main>
        <HomePage />
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
