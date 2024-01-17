
import Image from "next/image";

const Hero = () => {
    return (
        <>
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
        </>
    )
}

export default Hero;