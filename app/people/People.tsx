'use client'

import Image from "next/image";
import { faLocationDot, faPhone, faHouse, faGraduationCap, faBriefcase, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from "../components/modal/Modal";
import { useState } from 'react';
import { IPerson } from "@/interface/PeopleData";

interface PeopleProps {
    person: IPerson; // Use the interface for type safety
}

const People = ({ person }: PeopleProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="w-44 flex flex-col shadow-xl rounded-xl m-16 relative" onClick={() => setIsOpen(true)}>
                <div className="absolute top-[-30px] left-[-30px] z-10 w-44">
                    <Image
                        src={person.image}
                        alt={person.name}
                        height={400}
                        width={1200}
                        className='rounded-xl'
                    />
                </div>
                <div className="basis-full p-3 mt-24 text-left antialiased">
                    <div className="flex flex-col gap-2">
                        <div className="basis-full font-semibold">{person.name}</div>
                        <div><hr /></div>
                        <div className="basis-full">
                            <div className="flex flex-row gap-2">
                                <div><FontAwesomeIcon icon={faLocationDot} style={{ color: '#8EB1E5' }} /></div>
                                <div className="text-xs">{person.address}</div>
                            </div>
                        </div>
                        <div className="basis-full">
                            <div className="flex flex-row gap-2">
                                <div><FontAwesomeIcon icon={faPhone} style={{ color: '#8EB1E5' }} /></div>
                                <div className="text-xs">{person.phone}</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
                <div className="flex flex-row gap-6">
                    <div className="basis-1/2">
                    <Image
                            src={person.image}
                            alt={person.name}
                            height="400"
                            width="1200"
                            className='rounded-xl'
                        />
                    </div>
                    <div className="basis-1/2">
                        <div className="flex flex-col gap-2">
                            <div className="basis-full font-semibold"> Dian Sastrowardoyo</div>
                            <div><hr /></div>
                            <div className="basis-full">
                                <div className="flex flex-row gap-4 items-center ">
                                    <div className="flex items-center"><FontAwesomeIcon icon={faCalendar} style={{ color: '#8EB1E5' }} /></div>
                                    <div className="text-xs flex items-center">{person.birth_place}, {person.birth_date}</div>
                                </div>
                            </div>
                            <div className="basis-full">
                                <div className="flex flex-row gap-4">
                                    <div><FontAwesomeIcon icon={faPhone} style={{ color: '#8EB1E5' }} /></div>
                                    <div className="text-xs">081234567889</div>
                                </div>
                            </div>
                            <div className="basis-full">
                                <div className="flex flex-row gap-4">
                                    <div><FontAwesomeIcon icon={faHouse} style={{ color: '#8EB1E5' }} /></div>
                                    <div className="text-xs">RT 3 RW 1 Sumberrejo Wonoayi, Sidoarjo, Jawa Timur.</div>
                                </div>
                            </div>
                            <div className="basis-full">
                                <div className="flex flex-row gap-4">
                                    <div><FontAwesomeIcon icon={faGraduationCap} style={{ color: '#8EB1E5' }} /></div>
                                    <div className="text-xs">S1 Kedokteran</div>
                                </div>
                            </div>
                            <div className="basis-full">
                                <div className="flex flex-row gap-4">
                                    <div><FontAwesomeIcon icon={faBriefcase} style={{ color: '#8EB1E5' }} /></div>
                                    <div className="text-xs">RS Anwar Medika, Krian</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default People;