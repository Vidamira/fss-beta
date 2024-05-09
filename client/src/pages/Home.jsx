import React, { useState } from 'react'; 
import Hero from "../components/Hero";
import AlternateSectionTitle from "../components/AlternateSectionTitle";
import SectionTitle from '../components/SectionTitle';
import CardList from "../components/CardList";
import VerticalTabs from "../components/VerticalTabs"; 
import Cta from '../components/Cta';

import circuit from '/circuit.png';

const cards = [
  { id: 1, title: 'BUILD', content: 'We help you find the best way to grow your business with AI. custom solutions tailored to your needs.', tagText: 'Web Design' },
  { id: 2, title: 'CONSULT', content: 'We help you find the best way to grow your business with AI. custom solutions tailored to your needs.', tagText: 'Development' },
  { id: 3, title: 'MAINTAIN', content: 'We help you find the best way to grow your business with AI. custom solutions tailored to your needs.', tagText: 'Marketing' },
];



const tabs = [
  //tab 1
  {
    id: 1,
    label: 'VALUES',
    content: (
      <>
        <img src={circuit} alt="Tab 1 image" style={{ width: '100%' }}/>
        <h2>VALUES</h2>
        <p>At Faltstein, we specialize in creating unique and engaging digital experiences. Our team of talented designers and developers work together to bring your vision to life.</p>
      </>
    ),
  },
  //tab 2
  {
    id: 2,
    label: 'MISSION',
    content: (
      <>
        <img src={circuit} alt="Tab 1 image" style={{ width: '100%' }} />
        <h2>MISSION</h2>
        <p>Content for Tab 1</p>
      </>
    ),
  },
  //tab 3
  {
    id: 3,
    label: 'ABOUT US',
    content: (
      <>
        <img src={circuit} alt="Tab 1 image" style={{ width: '100%' }}/>
        <h2>ABOUT US</h2>
        <p>Content for Tab 1</p>
      </>
    ),
  },

  //TAB 4
  {
    id: 4,
    label: 'CAREER',
    content: (
      <>
        <img src={circuit} alt="Tab 1 image" style={{ width: '100%' }}/>
        <h2>CAREERS</h2>
        <p>Content for Tab 1</p>
      </>
    ),
  },
  
];

//the works cards

const cardsA = [
  { id: 1, title: '', content: 'We help you find the best way to grow your business with AI. custom solutions tailored to your needs.', tagText: 'Web Design' },
  { id: 2, title: '', content: 'We help you find the best way to grow your business with AI. custom solutions tailored to your needs.', tagText: 'Development' },
  { id: 3, title: 'MAINTAIN', content: 'We help you find the best way to grow your business with AI. custom solutions tailored to your needs.', tagText: 'Marketing' },
];

export default function Home() {
  // Tabs functionality 
const [activeTabIndex, setActiveTabIndex] = useState(0); 

const handleTabClick = (index) => {
  setActiveTabIndex(index);
};

  return (
    <>
      <Hero />
      <div>
        <SectionTitle title="THE SERVICES." subtitle="At Faltstein, we specialize in creating unique and engaging digital experiences. Our team of talented designers and developers work together to bring your vision to life." isReversed={true} />
        <CardList cards={cards} />

        <AlternateSectionTitle title="THE TEAM." subtitle="At Faltstein, we specialize in creating unique and engaging digital experiences. Our team of talented designers and developers work together to bring your vision to life." isReversed={false} />
        <VerticalTabs tabs={tabs} activeTabIndex={activeTabIndex} onTabClick={handleTabClick} /> {/* Pass props to VerticalTabs */}

        <SectionTitle title="THE WORKS." subtitle="At Faltstein, we specialize in creating unique and engaging digital experiences. Our team of talented designers and developers work together to bring your vision to life." isReversed={true} />
        <CardList cards={cardsA} />
        <Cta />
      </div>
    </>
  );
}
