import Image from "next/image";
import { faLocationDot, faPhone, faHouse, faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from "../modal/page";
import { useState } from 'react';

const People = ({ name, address, phone, image }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="w-44 flex flex-col shadow-xl rounded-xl m-16 relative" onClick={() => setIsOpen(true)}>
                <div className="absolute top-[-30px] left-[-30px] z-10 w-44">
                    <Image
                        src="https://img.freepik.com/free-photo/portrait-happy-asian-woman-smiling-posing-confident-cross-arms-chest-standing-against-studio-background_1258-88983.jpg"
                        alt="Main Image Ikadamar"
                        height="400"
                        width="1200"
                        className='rounded-xl'
                    />
                </div>
                <div className="basis-full p-3 mt-24 text-left antialiased">
                    <div className="flex flex-col gap-2">
                        <div className="basis-full font-semibold"> Dian Sastrowardoyo</div>
                        <div><hr /></div>
                        <div className="basis-full">
                            <div className="flex flex-row gap-2">
                                <div><FontAwesomeIcon icon={faLocationDot} style={{ color: '#8EB1E5' }} /></div>
                                <div className="text-xs">Jl. Soekarno Hatta Gg Duku No 15 Kelutan Trenggalek</div>
                            </div>
                        </div>
                        <div className="basis-full">
                            <div className="flex flex-row gap-2">
                                <div><FontAwesomeIcon icon={faPhone} style={{ color: '#8EB1E5' }} /></div>
                                <div className="text-xs">081234567889</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
                <div className="flex flex-row gap-6">
                    <div className="basis-1/2">
                        <Image
                            src="https://img.freepik.com/free-photo/portrait-happy-asian-woman-smiling-posing-confident-cross-arms-chest-standing-against-studio-background_1258-88983.jpg"
                            alt="Main Image Ikadamar"
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
                                    <div className="flex items-center"><FontAwesomeIcon icon={faLocationDot} style={{ color: '#8EB1E5' }} /></div>
                                    <div className="text-xs flex items-center">Jl. Soekarno Hatta Gg Duku No 15 Kelutan Trenggalek</div>
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