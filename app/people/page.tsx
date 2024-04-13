import Image from "next/image";

const People = () => {
    return (
        <div className="w-44 flex flex-col shadow-xl rounded-xl m-16 relative">
            <div className="absolute top-[-30px] left-[-30px] z-10 w-44">
                <Image
                    src="https://img.freepik.com/free-photo/portrait-happy-asian-woman-smiling-posing-confident-cross-arms-chest-standing-against-studio-background_1258-88983.jpg"
                    alt="Main Image Ikadamar"
                    height="400"
                    width="1200"
                    className='rounded-xl'
                />
            </div>
            <div className="basis-full p-3 mt-20 text-left">
                <div className="flex flex-col gap-2">
                    <div className="basis-full font-semibold"> Dian Sastrowardoyo</div>
                    <div><hr /></div>
                    <div className="basis-full">
                        <div></div>
                        <div className="text-xs">Jl. Soekarno Hatta Gg Duku No 15 Kelutan Trenggalek</div>
                    </div>
                    <div className="basis-full">
                        <div></div>
                        <div className="text-xs">081234567889</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default People;