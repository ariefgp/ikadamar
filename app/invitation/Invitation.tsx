'use client'

import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";
import Navbar from '../components/navbar/Navbar';

function Invitation() {
  const Countdown = () => {
    const [countdownDate, setCountdownDate] = useState(
      new Date("2024-04-14T09:00:00").getTime()
    );
    const [state, setState] = useState({
      days: "0",
      hours: "0",
      minutes: "0",
      seconds: "0"
    });

    useEffect(() => {
      const setNewTime = () => {
        if (countdownDate) {
          const currentTime = new Date().getTime();
  
          const distanceToDate = countdownDate - currentTime;
  
          let days: string | number = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
          let hours: string | number = Math.floor(
            (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          let minutes: string | number = Math.floor(
            (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
          );
          let seconds: string | number = Math.floor((distanceToDate % (1000 * 60)) / 1000);
  
          const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
          days = `${days}`;
          if (numbersToAddZeroTo.includes(hours)) {
            hours = `0${hours}`;
          } else if (numbersToAddZeroTo.includes(minutes)) {
            minutes = `0${minutes}`;
          } else if (numbersToAddZeroTo.includes(seconds)) {
            seconds = `0${seconds}`;
          }
  
          setState({ days: days, hours: hours as string, minutes: minutes as string, seconds: seconds as string });
        }
      };

      setInterval(() => setNewTime(), 1000);
    }, [countdownDate]);

    return (
      <div className="flex flex-row justify-center gap-5">
        <div className="flex-initial w-20 py-6 rounded-lg bg-white">
          <div className='font-bold'>{state.days || "0"}</div>
          <div className="text-xs">Hari</div>
        </div>
        <div className="flex-initial w-20 py-6 rounded-lg bg-white">
          <div className='font-bold'>{state.hours || "00"}</div>
          <div className="text-xs">Jam</div>
        </div>
        <div className="flex-initial w-20 py-6 rounded-lg bg-white">
          <div className='font-bold'>{state.minutes || "00"}</div>
          <div className="text-xs">Menit</div>
        </div>
        <div className="flex-initial w-20 py-6 rounded-lg bg-white">
          <div className='font-bold'>{state.seconds || "00"}</div>
          <div className="text-xs">Detik</div>
        </div>
      </div>
    );
  };
  return (
    <>
      <Navbar bgColor="#DDE9FB"/>
      <div className="flex flex-col text-center bg-[#f8f9fa] text-sm md:text-base">
        <div className="basis-full bg-[#DDE9FB] md:py-8 lg:py-10 px-5 md:px-16 lg:px-48">
          <div className='flex flex-col-reverse md:flex-row items-center'>
            <div className="basis-full md:basis-2/5 pt-10 pb-12 md:pb-0 md:pt-0">
              <div className="text-center md:text-left text-3xl md:text-4xl">Sugeng Rawuh</div>
              <div className="text-center md:text-left mt-6 text-5xl md:text-6xl font-semibold tracking-widest">Warga <br /> IKADAMAR</div>
            </div>
            <div className="basis-full md:basis-3/5">
              <div className="w-3/5 m-auto md:w-full pt-10 md:pt-0">
                <Image
                  src="/main_thumbnail.png"
                  alt="Main Image Ikadamar"
                  height="800"
                  width="1200"
                  className='md:-mb-14 lg:-mb-20'
                />
              </div>
            </div>
          </div>

        </div>
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
        <div className="basis-full px-5 py-3 md:py-5 bg-[#C7D1E1] text-white md:px-20 lg:px-48">
          Copyright @codekarsa. 2024
        </div>
      </div>
    </>
  )
}

export default Invitation