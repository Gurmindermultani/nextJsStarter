import Head from 'next/head'
import Lead from '../../containers/Lead';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AirAsia transforms employee experience with Leena AI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Download the case study and discover the transformative journey of AirAsia."></meta>
        <meta name="keywords" content="AirAsia employee query resolution, AirAsia conversational AI, AirAsia Leena AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes"></meta>
        <meta property="og:image" content="https://home.leena.ai/images/airasia/book.png" />
        <meta property="og:title" content="AirAsia transforms employee experience with Leena AI" />
        <meta property="og:description" content="Download the case study and discover the transformative journey of AirAsia." />
        <meta property="og:url" content="https://home.leena.ai/lead" />
      </Head>
      <main>
        <Lead />
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
        }
      `}</style>
    </div>
  )
}
