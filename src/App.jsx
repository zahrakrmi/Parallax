
import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/navbar'
import Header from './components/header/Header'
import CurserManager from './components/CursorManager/CurserManager'
import Featured from './components/Featured/Featured'

import Gallery from './components/Gallery/Gallery'
import Footer from './footer/Footer'
import Text from './components/text/Text'
import Zoom from './components/zoom/zoom'
import Lenis from '@studio-freight/lenis/types'

export default function App() {
  useEffect( () => {

    const lenis = new Lenis()

   

    function raf(time) {

        lenis.raf(time)

        requestAnimationFrame(raf)

    }



    requestAnimationFrame(raf)

},[])
  return (
    <>
    <CurserManager />
    <div className='py-10'>
      
      <Navbar />
      <Header />
      <Zoom />
      <Text />
      <Gallery />
      <Footer />
    </div>
    </>
    
  )
}
