
import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import CurserManager from './components/CursorManager/CurserManager'
import Gallery from './components/Gallery/Gallery'
import Footer from './footer/Footer'
import Text from './components/text/Text'
import Zoom from './components/zoom/Zoom'


export default function App() {
//   useEffect( () => {

//     const lenis = new Lenis()

   

//     function raf(time) {

//         lenis.raf(time)

//         requestAnimationFrame(raf)

//     }



//     requestAnimationFrame(raf)

// },[])
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
