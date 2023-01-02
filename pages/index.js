import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Head from 'next/head'
import Mission from '../components/Mission'
import Footer from '../components/Footer'
import Features from '../components/Features'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Parking Protect</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Parking Protect - Proudly Protecting People's Places!" />
      </Head>
      <Nav />
      <Hero />
      <Features />
      <Mission />
      <Footer />

    </div>
  )
}
