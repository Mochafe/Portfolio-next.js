import Typewriter from "typewriter-effect";
import { useState, useEffect} from 'react';

import Image from 'next/image'



function Home() {


  return (
    <main>
      <section className='text-6xl text-white p-5 text-center md:text-left md:ml-10 mt-36 max-w-fit rounded-2xl min-h-[400px] md:min-h-0 bg-gradient-to-tr from-violet-500 to-fuchsia-500'>
        <h2>Florian Pasquet,</h2>
        <p>Je fait</p>
        <Typewriter options={{
          strings: ["du développement web.", "de la conception d'application.", "du design UI/UX."],
          autoStart: true,
          loop: true
        }} />
      </section>
      <section className="mt-48 mb-20 md:mb-0 p-12 rounded-2xl text-white bg-gradient-to-tr from-fuchsia-500 to-violet-500">
        <p className="text-center text-5xl">Mon domain de prédilection est le back-end notamment en Javascript/Typescript</p>
      </section>
    </main>
  )
}


export default Home
