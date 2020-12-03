import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Neele</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
        <link rel="preload"
            href="/fonts/SFPro/SFPro-Semibold.ttf"
            as="font"
            crossOrigin=""/>
        <link rel="preload"
            href="/fonts/SFPro/SFPro-Regular.ttf"
            as="font"
            crossOrigin=""/>
      </Head>

      <main>
        <div className="container">
          <div className="row pt-5">
            <div className="col">
              <div className="d-flex pb-2">
                <img className="logo-neele" src="img/Neele-app.png" alt=""/>
                <h1 className="title-neele mb-0 align-self-end">eele</h1>
              </div>
              <h2 className="text-white py-3">Learn a language faster by speaking it</h2>
              <p className="text-dark-green py-3">unique method based on effective techniques used by famous Pollygots.</p>
                <div className="row justify-content-around py-5">
                  <img className="icone-apple" src="img/apple-icon2.png" alt=""/>
                </div>
            </div>
            <div className="col px-5">
              <img className="img-section ml-4" src="img/neele-content.jpeg" alt=""/>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
