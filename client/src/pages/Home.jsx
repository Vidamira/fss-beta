import Hero from "../components/Hero";
import AlternateSectionTitle from "../components/AlternateSectionTitle"; 
import CardList from "../components/CardList";

const cards = [
  { id: 1, title: 'The Services.', content: 'This is some content...' },
  { id: 2, title: 'Card Title 2', content: 'This is some content...' },
  { id: 3, title: 'Card Title 3', content: 'This is some content...' },
];

export default function Home() {
  return (
    <> 
      <Hero />
      <div>
        <AlternateSectionTitle title="THE SERVICES." subtitle="At Faltstein, we specialize in creating unique and engaging digital experiences. Our team of talented designers and developers work together to bring your vision to life." isReversed={true} />
        <CardList cards={cards} />
        <AlternateSectionTitle title="THE TEAM." subtitle="At Faltstein, we specialize in creating unique and engaging digital experiences. Our team of talented designers and developers work together to bring your vision to life." isReversed={false} />
        <AlternateSectionTitle title="THE WORKS." subtitle="At Faltstein, we specialize in creating unique and engaging digital experiences. Our team of talented designers and developers work together to bring your vision to life." isReversed={true} />
      </div>
    </>
  );
}
