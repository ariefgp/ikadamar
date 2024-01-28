import Image from "next/image";

const People = () => {
    return (
        <div className="w-52 flex flex-col shadow-xl m-16">
            <div>
                <Image 
                    src="https://img.freepik.com/free-photo/portrait-happy-asian-woman-smiling-posing-confident-cross-arms-chest-standing-against-studio-background_1258-88983.jpg" 
                    alt="Main Image Ikadamar"
                    height="800"
                    width="1200"
                    className='md:-mb-14 lg:-mb-20'
                />
            </div>
            <div>
                <div> Dian Sastrowardoyo</div>
                <div><hr /></div>
                <div>
                    <div></div>
                    <div>Jl. Soekarno Hatta Gg Duku No 15 Kelutan Trenggalek</div>
                </div>
                <div>
                    <div></div>
                    <div>081234567889</div>
                </div>
            </div>
        </div>
    );
}

export default People;