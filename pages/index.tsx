import Typewriter from "typewriter-effect";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useState, useEffect, useRef } from 'react';

import Image from 'next/image'


function Home() {
  const containerRef = useRef(null);

  return (
    <main data-scroll-container ref={containerRef}>
      <section className='text-6xl text-center md:text-left md:ml-10 mt-36' data-scroll-section>
        <h2>Florian Pasquet,</h2>
        <p>Je fait</p>
        <Typewriter options={{
          strings: ["du développement web.", "de la conception d'application.", "du design UI/UX."],
          autoStart: true,
          loop: true
        }} />
      </section>
      <section className="mt-[5000px]" data-scroll-section>
        <p className="text-center text-5xl">Mon domain de prédilection est le back-end notamment en Javascript/Typescript</p>
      </section>
    </main>
  )
}


export default Home
