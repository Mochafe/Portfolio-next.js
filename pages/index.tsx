import type { NextPage } from 'next'
import Typewriter from "typewriter-effect";
import LocomotiveScroll from "locomotive-scroll"
import { useState, useEffect } from 'react';

import Image from 'next/image'


function  Home() {
  /*
  if(document === undefined) {
    console.log("Undefineddd")
  }
  
  const container = document.getElementById("data-scroll-container");

  if(container !== null) {
    const scroll = new LocomotiveScroll({
      el: container,
      smooth: true
    });
*/
  
  

  return (
    <div id="data-scroll-container">
      <main>
        <section className='text-6xl ml-44 mt-36'>
          <h2>Florian Pasquet</h2>
          <p>Je suis </p><Typewriter options={{
            strings: ["un développeur", "", ""],
            autoStart: true,
            loop: true
          }} />
        </section>

      </main>
    </div>
  )
}


export default Home
