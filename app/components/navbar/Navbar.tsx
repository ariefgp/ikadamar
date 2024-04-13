'use client'
import Link from 'next/link'
import { Menu } from '@headlessui/react'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

function Navbar(value: any) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <header className={`hidden lg:flex flex-row-reverse flex-wrap gap-8 lg:gap-16 py-10 px-20 lg:py-16 lg:px-48 font-semibold bg-[${value.bgColor}] text-[#383333]`}>
                {/* <div>
                <Link href="/#" className='hover:text-[#7791BA]'> Artikel </Link>
            </div> */}
                <div>
                    <Link href="/keluarga" className='hover:text-[#7791BA]'> Keluarga </Link>
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

            <header className={`block lg:hidden px-8 pt-7 pb-2 text-right font-semibold bg-[${value.bgColor}] text-[#383333]`}>
                <Menu>
                    <Menu.Button  onClick={toggleMenu}>
                        <FontAwesomeIcon icon={isOpen ? faClose : faBars} style={{ color: '#8EB1E5', fontSize: '30px' }} />
                    </Menu.Button>
                    <Menu.Items>
                        <div className='flex flex-col gap-2 mt-4'>
                            <Menu.Item>
                                <Link href="/" className='hover:text-[#7791BA]'> Beranda </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link href="/eyang-daman" className='hover:text-[#7791BA]'> Eyang Daman </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link href="/eyang-dasih" className='hover:text-[#7791BA]'> Eyang Dasih </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link href="/keluarga" className='hover:text-[#7791BA]'> Keluarga </Link>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Menu>
            </header>
        </>
    )
}

export default Navbar;