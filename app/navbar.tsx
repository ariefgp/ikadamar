import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
   <header className="hidden md:flex md:flex-row-reverse gap-16 py-16 px-48 font-bold bg-[#DDE9FB] text-[#383333]"> 
    <div>
        <Link href="/artikel" className='hover:text-[#7791BA]'> Artikel </Link>
    </div>
    <div>
        <Link href="/keluarga" className='hover:text-[#7791BA]'> Keluarga </Link>
    </div>
    <div>
        <Link href="/mbah-dasih" className='hover:text-[#7791BA]'> Mbah Dasih </Link>
    </div>
    <div>
        <Link href="/mbah-daman" className='hover:text-[#7791BA]'> Mbah Daman </Link>
    </div>
    <div>
        <Link href="/" className='hover:text-[#7791BA]'> Beranda </Link>
    </div>
   </header>
  )
}

export default Navbar