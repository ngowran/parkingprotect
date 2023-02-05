import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Head from "next/head";
import Mission from "../components/Mission";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Contact from "../components/Contact";
import Team from "../components/Team";

export default function Home() {
  return (
    <div className="h-screen scroll-smooth snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/40 scrollbar-thumb-[#1f3c88]">
      <Head>
        <title>Parking Protect</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Parking Protect - Protecting People's Places!"
        />
      </Head>

      <Nav />

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      <section id="features" className="snap-center">
        <Features />
      </section>

      <section id="mission" className="snap-center">
        <Mission />
      </section>

      <section id="team" className="snap-center">
        <Team />
      </section>

      <section id="contact" className="snap-center">
        <Contact />
      </section>

      <section id="footer" className="snap-center">
        <Footer />
      </section>
    </div>
  );
}
