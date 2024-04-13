import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { getData } from '@/lib/getData';
import People from "../people/People";

const Keluarga = async () => {
    const people = await getData();
    return (
        <>
            <Navbar bgColor="#FFFFFF" />
            <div className="flex flex-col w-full pl-none pt-4 text-[#5F5B5B] relative">
                <div className="basis-full min-h-[300px] md:pr-44 z-10">
                    <div className="w-full bg-[#DDE9FB] min-h-[300px]"></div>
                </div>
                <div className="basis-full mt-20 px-12 lg:px-none md:pl-12 -mt-60 md:-mt-60 relative z-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-2 lg:gap-4">
                        {people?.map((person: any, index: any) => <People key={index} person={person} />)}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Keluarga;