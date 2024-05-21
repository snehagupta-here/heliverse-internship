import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Section1 from '../components/Section1'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <>
      <Navbar />
      <div className='container w-[88.5%] m-auto flex justify-between flex-col'>
        <Header />
        <Section1 />
      </div>
      <Footer />
    </>
  )
}

export default HomePage
