import Navbar from "../navbar";
import Image from "next/image";

const EyangDaman = () => {
    return (
        <>
            <Navbar bgColor="#FFFFFF" />
            <div className="flex flex-col w-full pl-none pt-4 lg:pl-44 text-[#5F5B5B]">
                <div className="basis-full bg-[#DDE9FB] py-12 px-20">
                    <div className="flex flex-col md:flex-row gap-16 md:gap-none">
                        <div className="basis-full md:basis-1/5">
                            <Image
                                src="/eyang-dasih.png"
                                alt="Eyang Dasih"
                                height="356"
                                width="315"
                                className="max-w-[150] m-auto md:max-w-[210px] lg:-ml-40 lg:-mt-32 lg:max-w-xs"
                            />
                        </div>
                        <div className="basis-full md:basis-4/5 md:pl-10">
                            <div className="flex flex-col">
                                <div className="basis-full text-4xl font-semibold text-center md:text-left">
                                    Dasih <br /> Martowisastro
                                </div>
                                <div className="basis-full mt-4 font-normal text-center md:text-left">
                                    21 Oktober 1912 - 1 Februari 1981
                                </div>
                                <div className="basis-full mt-14 text-2xl font-extrabold text-center md:text-left">
                                    “Selalu guyup rukun dengan <br /> semua saudara”
                                </div>
                                <div className="basis-full mt-6 text-2xl  text-center md:text-right font-extrabold md:pr-4 lg:pr-24">
                                    “Urip iku kudu sing <br /> gemi nastiti lan ngati-ati”
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="basis-full mt-20 md:pl-12">
                    <div className="flex flex-col md:flex-row">
                        <div className="basis-full md:basis-1/2">
                            <div className="flex flex-col gap-12">
                                <div className="basis-full">
                                    <div className="font-semibold text-2xl">Pendidikan</div>
                                    <div className="mt-4 pl-5">
                                        <ol className="list-decimal">
                                            <li>Sekolah Rakyat Trenggalek</li>
                                            <li>Sekolah Guru / Cursus Volk Onderweis (CVO)</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="basis-full">
                                    <div className="font-semibold text-2xl">Pekerjaan</div>
                                    <div className="mt-4 pl-5">
                                        <ol className="list-decimal">
                                            <li>Guru Sekolah Rakyat Gandusari</li>
                                            <li>Guru Sekolah Rakyat Kedungsigit</li>
                                            <li>Guru Sekolah Rakyat Karangan II Trenggalek</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="basis-full">
                                    <div className="font-semibold text-2xl">Pengalaman</div>
                                    <div className="mt-4 pl-5">
                                        <ol className="list-decimal">
                                            <li>Pengurus aperwari Kecamatan Karangan</li>
                                            <li>Penganut kepercayaan sapta darma</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="basis-full">
                                    <div className="font-semibold text-2xl">Kondisi Kesehatan</div>
                                    <div className="mt-4 text-justify md:w-3/4">
                                        <p>Mbah Dasih merupakan pribadi yang kuat dan jarang mengeluh. Namun pada suatu hari di tahun 1956, beliau mengalami miskram (pendarahan hebat). Dan setelah itu kondisi kesehatannya menjadi jauh menurun dan sering batuk-batuk.</p>
                                        <p>Setelahnya si mbah divonis sakit paru-paru dan harus menjalani pengobatan teratur di Santorium Blitar.
                                            Hingga pada 1 Februari 1981, beliau menghembuskan nafas terakhir setelah sebelumnya opname sekitar 3 minggu di RSUD dr. Soetomo (Karangmenjangan)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="basis-full md:basis-1/2">
                            <div className="flex flex-col gap-12">
                                <div className="basis-full">
                                    <div className="font-semibold text-2xl">Kebiasaan (Kegemaran)</div>
                                    <div className="mt-4 text-justify md:w-3/4">
                                        <p>Bersama mbah Daman, biasanya mbah Dasih mendengarkan karawitan (klenengan) pada sore hari. Di waktu luang biasanya mbah Dasih merajut, membatik, menanam bunga dan empon-empon di pekarangan rumah Cethok.</p>
                                        <p>Selain itu, mbah juga sangat gemar membuat kue mendut dan lapis.</p>
                                    </div>
                                </div>
                                <div className="basis-full">
                                    <div className="font-semibold text-2xl">Perilaku (Watak)</div>
                                    <div className="mt-4 text-justify md:w-3/4">
                                        <p>Beliau merupakan pribadi yang lemah lembut, sedikit pendiam, selalu santun dan halus dalam bertutur kata. Meski sedikit pendiam, namun mbah selalu memberi nasehat kebaikan untuk anak cucunya.</p>
                                        <p>Selain itu mbah Dasih sangat gigih dan teguh pendirian.</p>
                                    </div>
                                </div>
                                <div className="basis-full">
                                    <div className="font-semibold text-2xl">Barang Peninggalan</div>
                                    <div className="mt-4 pl-5">
                                        <ol className="list-decimal">
                                            <li>Perhiasan emas (permata)</li>
                                            <li>Rumah Cethok, Karangan</li>
                                            <li>Tanah pekarangan di Cethok</li>
                                            <li>Tanah sawah Cethok dan Pinggirsari</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-full text-center mt-20 py-3 md:py-5 bg-[#C7D1E1] text-white">
                Copyright @codekarsa. 2024
            </div>
        </>
    );
}

export default EyangDaman;