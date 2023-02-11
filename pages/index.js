import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Skills from '../components/Skills'
import Proyects from '../components/Projects'
import Contact from '../components/Contact'
import PageFooter from '../components/Footer'

export default function Home() {

  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png"></link>
        <title> Carlos | Developer </title>
        <meta name="description" content="Hi, I'm Carlos 👋" />
      </Head>
      <Navbar />
      <Main />
      <Skills />
      <Proyects />
      <Contact />
      <PageFooter />
    </div>
  )
}
