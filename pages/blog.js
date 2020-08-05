import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog from '../containers/Blog';

export default function Main() {
  return (
    <div className="container">
      <Head>
        <title>Blog | Leena AI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="With Leena AI, you can make work easy for your enterprise, and enhance employee engagement. It's a platform that transforms your entire employee experience." />
        <meta name="keywords" content="About Leena AI, Leena AI story, Leena AI information" />
        <meta name="mobile-web-app-capable" content="yes"></meta>
      </Head>
      <Header />
      <main>
        <Blog />
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
