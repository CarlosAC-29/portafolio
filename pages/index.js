import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Proyects from '../components/Projects'
import Contact from '../components/Contact'
import PageFooter from '../components/Footer'
import React, { useEffect, useState } from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

export default function Home() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <div>
      {loading ?
        <div className='flex flex-col gap-24 justify-center items-center m-auto h-screen'>
          <ClimbingBoxLoader
            color='#09B594'
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        :
        <div>
          <Head>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png"></link>
            <title> Carlos | Developer </title>
            <meta name="description" content="Hi, I'm Carlos 👋" />
          </Head>
          <Navbar />
          <Main />
          <Education />
          <Experience />
          <Skills />
          <Proyects />
          <Contact />
          <PageFooter />
        </div>
      }
    </div>
  )
}
