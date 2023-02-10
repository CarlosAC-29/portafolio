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
        <link rel="shortcut icon" href="/favicon.ico" />
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
