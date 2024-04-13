import { promises as fs } from 'fs';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
import People from './people/People';

const Home = async () => {
  const file = await fs.readFile(process.cwd() + '/data/people.json', 'utf8');
  const people = JSON.parse(file);
  return (
    <div className="flex flex-col text-center bg-[#f8f9fa] text-sm md:text-base">
      <Hero />
      <div className='basis-full px-5 md:px-20 mt-20'>
        <div className="mb-12 font-semibold text-[#5F5B5B] text-2xl">Anggota Keluarga</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-2 lg:gap-4">
          {people?.slice(0, 4).map((person: any, index: any) => <People key={index} person={person} />)}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;