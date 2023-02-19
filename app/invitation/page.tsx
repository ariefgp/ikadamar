import React from 'react';
import Image from "next/image";
import Link from 'next/link';

function Invitation() {
  return (
    <div className="flex flex-col text-center">
        <div className="basis-full bg-[#DDE9FB] px-48">
            <div className='flex flex-row min-h-[500px] items-center'>
                <div className="basis-2/5">
                    <div className="text-left text-4xl">Sugeng Rawuh</div>
                    <div className="text-left mt-6 text-6xl font-semibold tracking-widest">Warga <br /> IKADAMAR</div>
                </div>
                <div className="basis-3/5">
                    <Image 
                        src="/main_thumbnail.png" 
                        alt="Main Image Ikadamar"
                        height="800"
                        width="1200"
                        className='-mb-12'
                    />
                </div>
            </div>
            
        </div>
        <div className="basis-full px-48">
            <div className="mt-32">
                <div>Kami mengundang</div>
                <div>Bapak, Ibu dan seluruh keluarga besar IKADAMAR ke acara</div>
            </div>
            <div className="font-dancing text-7xl font-bold text-[#6A8DC2] mt-8">
                <div className="ml-16">Reuni</div>
                <div className="mr-16 -mt-4">Keluarga</div>
            </div>
            <div className="mt-8">
                <div>yang akan dilaksanakan pada</div>
            </div>
            <div className="flex flex-row my-8 font-semibold text-[#5F5B5B]">
                <div className="flex-1 text-right pr-12">
                    <div>Minggu</div>
                    <div className='mt-2'>09:00</div>
                </div>
                <div className="flex-none p-3 font-dosis font-semibold text-4xl">30</div>
                <div className="flex-1 text-left pl-12">
                    <div>April</div>
                    <div className='mt-2'>2023</div>
                </div>
            </div>
            <div>
                <div>
                    Kediaman Pak Musman dan Bu Dwi Asih
                </div>
                <div>
                    Jl Soekarno Hatta Gang Duku No 15 Kelutan, Trenggalek
                </div>
                <div>
                    Jawa Timur
                </div>
            </div>
        </div>
        <div className="basis-full bg-[#E8EBF0] mt-12 py-12 px-48">
            <div className="">Hitung Mundur</div>
            <div>Countdown</div>
        </div>
        <div className="basis-full px-48">
            <div className="mt-16">Di reuni keluarga kali ini, apakah berkenan hadir dengan keluarga?</div>
            <div className="mt-8">
                <Link href="#" className="py-2 px-6 bg-[#8EB1E6] text-white shadow-xl m-5 rounded-md">Ya, bisa hadir</Link>
                <Link href="#" className="py-2 px-6 text-[#8EB1E5] shadow-xl m-5 border border-[#E8EBF0] rounded-md">Belum bisa hadir</Link>
            </div>
        </div>
        <div className="basis-full my-10 py-8 bg-[#C7D1E1] text-white px-48">
            Copyright @ariefgp. 2023
        </div>
    </div>
  )
}

export default Invitation