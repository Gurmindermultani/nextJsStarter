import Head from 'next/head'
import Header from '../components/Header';
import HomePage from '../containers/HomePage';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Leena.AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <HomePage />
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Leena.ai
        </a>
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
          margin-top: 80px;
          padding: 40px 90px;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,500,600|Poppins:400,500,600&display=swap'); 
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

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
