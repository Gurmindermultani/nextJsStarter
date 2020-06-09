import Head from 'next/head'
import Header from '../../components/Header';
import ContactUs from '../../containers/Company/ContactUs';

export default function Contact() {
  return (
    <div className="container">
      <Head>
        <title>Leena.AI - Schedule Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <ContactUs />
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
