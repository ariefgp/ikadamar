import Link from 'next/link'
import React from 'react'

function Navbar(value: any) {
    return (
        <header className={`flex flex-row-reverse gap-8 lg:gap-16 py-10 px-20 lg:py-16 lg:px-48 font-semibold bg-[${value.bgColor}] text-[#383333]`}>
            <div>
                <Link href="/#" className='hover:text-[#7791BA]'> Artikel </Link>
            </div>
            <div>
                <Link href="/#" className='hover:text-[#7791BA]'> Keluarga </Link>
            </div>
            <div>
                <Link href="/eyang-dasih" className='hover:text-[#7791BA]'> Eyang Dasih </Link>
            </div>
            <div>
                <Link href="/eyang-daman" className='hover:text-[#7791BA]'> Eyang Daman </Link>
            </div>
            <div>
                <Link href="/" className='hover:text-[#7791BA]'> Beranda </Link>
            </div>
        </header>
        //    <header className="hidden md:flex md:flex-row-reverse gap-8 lg:gap-16 py-10 px-20 lg:py-16 lg:px-48 font-bold bg-[#DDE9FB] text-[#383333]"> 
        //         <div>
        //             <Link href="/artikel" className='hover:text-[#7791BA]'> Artikel </Link>
        //         </div>
        //         <div>
        //             <Link href="/keluarga" className='hover:text-[#7791BA]'> Keluarga </Link>
        //         </div>
        //         <div>
        //             <Link href="/eyang-dasih" className='hover:text-[#7791BA]'> Eyang Dasih </Link>
        //         </div>
        //         <div>
        //             <Link href="/eyang-daman" className='hover:text-[#7791BA]'> Eyang Daman </Link>
        //         </div>
        //         <div>
        //             <Link href="/" className='hover:text-[#7791BA]'> Beranda </Link>
        //         </div>
        //     </header>
    )
}

export default Navbar