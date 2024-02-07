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
                                src="/eyang-daman.png"
                                alt="Eyang Daman"
                                height="356"
                                width="315"
                                className="max-w-[150] m-auto md:max-w-[210px] lg:-ml-40 lg:-mt-32 lg:max-w-xs"
                            />
                        </div>
                        <div className="basis-full md:basis-4/5 md:pl-10">
                            <div className="flex flex-col">
                                <div className="basis-full text-4xl font-semibold text-center md:text-left">
                                    Daman <br /> Martowisastro
                                </div>
                                <div className="basis-full mt-4 font-normal text-center md:text-left">
                                    31 Desember 1910 - 25 Januari 1972
                                </div>
                                <div className="basis-full mt-14 text-2xl font-extrabold text-center md:text-left">
                                    “Hidup yang rukun dengan <br /> sesama, agar damai sejahtera”
                                </div>
                                <div className="basis-full mt-6 text-2xl text-center md:text-right font-extrabold md:pr-4 lg:pr-24">
                                    Jadilah orang tapi tetap <br /> sederhana dan ingat selalu <br />“Ojo Dumeh”
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="basis-full mt-20 px-12 lg:px-none md:pl-12">
                    <div className="flex flex-col md:flex-row">
                        <div className="basis-full md:basis-1/2">
                            <div className="flex flex-col gap-12">
                                <div className="basis-full">
                                    <div className="font-semibold text-2xl">Pendidikan</div>
                                    <div className="mt-4 pl-5">
                                        <ol className="list-decimal">
                                            <li>Sekolah Rakyat (Jaman Penjajahan Belanda)</li>
                                            <li>Sekolah Guru / Cursus Volk Onderweis (CVO)</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="basis-full">
                                    <div className="font-semibold text-2xl">Pekerjaan</div>
                                    <div className="mt-4 pl-5">
                                        <ol className="list-decimal">
                                            <li>Guru sekolah Rakyat III Dongko</li>
                                            <li>Guru sekolah Gondang, Tugu </li>
                                            <li>Guru Sekolah Rakyat Karangan III</li>
                                            <li>Kepala Sekolah Rakyat Kedungsigit</li>
                                            <li>Kepala Sekolah Rakyat Suruh</li>
                                            <li>Kepala Sekolah Dasar Karangan II Trenggalek</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="basis-full">
                                    <div className="font-semibold text-2xl">Pengalaman</div>
                                    <div className="mt-4 pl-5">
                                        <ol className="list-decimal">
                                            <li>Pengurus PGRI Kec. Karangan</li>
                                            <li>Pengurus PNI Cabang Karangan</li>
                                            <li>Pendiri SMP PGRI Karangan</li>
                                            <li>Penganut kepercayaan sapta darma</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="basis-full">
                                    <div className="font-semibold text-2xl">Kondisi Kesehatan</div>
                                    <div className="mt-4 text-justify md:w-3/4">
                                        <p>Mbah merupakan orang yang sangat jarang sakit, apalagi sakit berat. Namun pada tahun 1972 pada waktu di sawah, tak sengaja kakinya terkena tunggak sampai menjadi tetanus. Dan penyakit itulah yang akhirnya membuat mbah meninggal pada 25 Januari 1972 setelah dirawat di RSUD Trenggalek.</p>
                                        <p>Di hari yang sama mbah dimakamkan di makam umum desa Karangan, Trenggalek.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="basis-full md:basis-1/2">
                            <div className="flex flex-col gap-12">
                                <div className="basis-full">
                                    <div className="font-semibold text-2xl">Kebiasaan (Kegemaran)</div>
                                    <div className="mt-4 text-justify md:w-3/4">
                                        <p>Mbah Daman sangat senang mendengarkan karawitan (klenengan) pada sore hari sembari memasak klobot (kulit jagung) dengan keningar, air kelapa dan gula merah untuk dibuat rokok.</p>
                                        <p>Pada masa itu, Mbah Daman menggunakan sepeda untuk bepergian kemana-mana, terutama untuk mengajar ke sekolah. Selain mengajar, Si Mbah juga memelihara sapi.</p>
                                    </div>
                                </div>
                                <div className="basis-full">
                                    <div className="font-semibold text-2xl">Perilaku (Watak)</div>
                                    <div className="mt-4 text-justify md:w-3/4">
                                        <p>Beliau merupakan pribadi yang sangat disiplin, memiliki kemauan yang kuat dan tekun dalam belajar. Karena kegigihan dan ketekunannya itu, setiap mengerjakan segala sesuatu selalu tuntas.</p>
                                    </div>
                                </div>
                                <div className="basis-full">
                                    <div className="font-semibold text-2xl">Barang Peninggalan</div>
                                    <div className="mt-4 pl-5">
                                        <ol className="list-decimal">
                                            <li>Keris Tetanen 2 buah dan tombak</li>
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