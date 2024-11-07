
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Card from './components/Card';
import data from './data';

export default function App() {


  const cards=data.map((item) => {
    return (
      <Card
            key = {item.id}
            item = {item}
            // img={item.coverImg}
            // rating={item.stats.rating}
            // reviewCount={item.stats.reviewCount}
            // price = {item.price}
            // location = {item.location}
            // title={item.title}
            // openSpots = {item.openSpots}
             />
    )
  })

  return (
    <div>
      <Navbar />
      <Intro />
      <section className="cards">
        {cards}
      </section>
    </div>
  );
}

// const cards= data.map((item)=>{
//   return( <Card img={item.coverImg} alt="katie-zaferes"
//           rating={item.stats.rating}
//           reviewCount={item.stats.reviewCount}
//           country={item.location}
//           title={item.title} price={item.price} /> )
//  });
