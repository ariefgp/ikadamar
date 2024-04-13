import React from 'react';
import Hero from '../components/hero/Hero';
import Footer from '../components/footer/Footer';
import People from '../people/People';
import { promises as fs } from 'fs';
import path from 'path';
import { IPerson } from "@/interface/PeopleData";

interface HomepageProps {
  people: IPerson[];
}

export const getStaticProps = async (): Promise<{ props: HomepageProps }> => {
  console.log(`getStaticProps`);
  try {
    const filePath = path.join(process.cwd(), 'data/people.json');
    const jsonData = await fs.readFile(filePath, 'utf8');
    const people = JSON.parse(jsonData) as IPerson[];
    console.error('success');
    return { props: { people } };
  } catch (error) {
    console.error('Failed to read file:', error);
    return { props: { people: [] } };
  }
}

const Homepage = ({ people }: HomepageProps) => {
  console.log("people ", JSON.stringify(people));
  return (
    <div className="flex flex-col text-center bg-[#f8f9fa] text-sm md:text-base">
      <Hero />
      <div className='basis-full px-5 md:px-20 mt-12'>
        <div className="grid grid-cols-4 gap-4">
          {people?.map((person, index) => <People key={index} person={person} />)}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Homepage