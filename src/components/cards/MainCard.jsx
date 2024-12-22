import React from "react";
import SpecialOffers from '../cards/SpecialOffers'
import RecProduct from '../cards/RecommendedProducts'
import CollectionBlock from '../cards/NewCollection'
import Brands from '../cards/Brands'
import '../../styles/allCard/maincard.css'; 


const cardData = [
  { name: "New Arrivals", profession: "Discover the Latest Trends", imgSrc: "../public/Cards/Rectangle7.svg" },
  { name: "Best Sellers", profession: "Our Most Popular Products", imgSrc: "../public/Cards/Rectangle8.svg" },
  { name: "Exclusive Offers", profession: "Limited Deals Just for You", imgSrc: "../public/Cards/Rectangle9.svg" },
  { name: "Trending Now", profession: "What’s Hot This Season", imgSrc: "../public/Cards/Rectangle10.svg" }
];

const MainCard = () => {
  return (
    <div className="card-page">
      <div className="section-cards">
        {cardData.map((card, index) => (
          <div className="card-one" key={index}>
            <img src={card.imgSrc} alt={`${card.name} Avatar`} />
            <div className="container">
              <h4><b>{card.name}</b></h4>  
              <p>{card.profession}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="card-slider">
        <RecProduct />
        <SpecialOffers />
        <CollectionBlock title="New Collection"/>
        <Brands />

      </div>
    </div>
    
  );
};

export default MainCard;