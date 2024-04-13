'use client'

import React from 'react';
import Hero from '../components/hero/Hero';
import Footer from '../components/footer/Footer';
import People from '../people/People';

const Homepage = () => {
  return (
    <div className="flex flex-col text-center bg-[#f8f9fa] text-sm md:text-base">
        <Hero />
        <div className='basis-full px-5 md:px-20 mt-12'>
          <div className="grid grid-cols-4 gap-4">
            <div><People /></div>
            <div><People /></div>
            <div><People /></div>
            <div><People /></div>
            <div><People /></div>
            <div><People /></div>
            <div><People /></div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Homepage