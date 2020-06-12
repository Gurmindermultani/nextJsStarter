import Head from 'next/head'
import Lead from '../../containers/Lead';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Leena.AI - Airasia</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="mobile-web-app-capable" content="yes"></meta>
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