'use client'

import React from 'react';
import Link from 'next/link';
import Hero from '../components/hero/Hero';
import Footer from '../components/footer/Footer';
import Countdown from '../components/countdown/Countdown';
import People from '../people/People';

const Invitation = () => {
  return (
    <div className="flex flex-col text-center bg-[#f8f9fa] text-sm md:text-base">
        <Hero />
        <div className="basis-full px-5 md:px-20 lg:px-48">
            <div className="pt-12 md:pt-20 lg:pt-32">
                <div>Kami mengundang</div>
                <div>Bapak, Ibu dan seluruh keluarga besar IKADAMAR ke acara</div>
            </div>
            <div className="font-dancing text-5xl md:text-7xl font-bold text-[#6A8DC2] mt-8">
                <div className="ml-10 md:ml-16">Reuni</div>
                <div className="mr-10 md:mr-16 -mt-4">Keluarga</div>
            </div>
            <div className="mt-8">
                <div>yang akan dilaksanakan pada</div>
            </div>
            <div className="flex flex-row my-8 font-semibold text-[#5F5B5B]">
                <div className="flex-1 text-right pr-12">
                    <div>Minggu</div>
                    <div className='mt-2'>10:00</div>
                </div>
                <div className="flex-none p-3 font-dosis font-semibold text-4xl">14</div>
                <div className="flex-1 text-left pl-12">
                    <div>April</div>
                    <div className='mt-2'>2024</div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="basis-full">
                    Tiga Dapoer Batavia
                </div>
                <div className="basis-full">
                    Jl. Mastrip No.6, Jepun, Kec. Tulungagung, Kabupaten Tulungagung
                </div>
                <div className="basis-full">
                    Jawa Timur
                </div>
            </div>
        </div>
        <div className="basis-full bg-[#E8EBF0] mt-12 py-12 px-5 md:px-20 lg:px-48">
            <div className="mb-12 font-semibold text-[#5F5B5B] text-2xl">Hitung Mundur</div>
            <div><Countdown /></div>
        </div>
        <div className="basis-full px-5 md:px-20 lg:px-48">
            <div className="pt-16">Di reuni keluarga kali ini, apakah berkenan hadir dengan keluarga?</div>
            <div className="pt-8 pb-16">
              <div className="flex flex-col md:flex-row gap-x-1">
                <div className="basis-full md:basis-1/2 md:text-right">
                  <Link href="https://forms.gle/EjxhW9TfY2kZfgms9" className="py-2 px-6 bg-[#8EB1E6] text-white shadow-xl m-5 rounded-md">Ya, bisa hadir</Link>
                </div>
                <div className="basis-full md:basis-1/2 mt-8 md:mt-0 md:text-left">
                  <Link href="https://forms.gle/EjxhW9TfY2kZfgms9" className="py-2 px-6 text-[#8EB1E6] shadow-xl m-5 border border-[#C7D1E1] rounded-md">Belum bisa hadir</Link>
                </div>
              </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Invitation