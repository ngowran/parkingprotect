
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Parking Protect</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Parking Protect - Protecting People's Places!" />
      </Head>
        <Nav/>
        <Hero/>
      
    </div>
  )
}
