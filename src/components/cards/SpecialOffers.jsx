import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../styles/allCard/specialoffers.css';

import leftArrow from '../../../public/Cards/arrow.svg';
import rightArrow from '../../../public/Cards/arrow.svg';

const products = [
  {
    id: 1,
    name: 'ADIDAS LC Arch Tee White',
    price: 25.00,
    image: 'public/Cards/special1.svg',
    sale: true,
  },
  {
    id: 2,
    name: 'COLLUSION Urban Echo Retro Graphic T-Shirt',
    price: 7.20,
    image: 'public/Cards/special2.svg',
    sale: true,
  },
  {
    id: 3,
    name: 'Jack & Jones Black Horizon Artistic Print Shirt',
    price: 18.99,
    image: 'public/Cards/special3.svg',
    sale: true,
  },
  {
    id: 4,
    name: 'New Balance Ultra Light Classic White Sports Tee',
    price: 25.00,
    image: 'public/Cards/special4.svg',
    sale: true,
  },
];

export default function SpecialOffers() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <h2>Special Offers</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            
            <img src={product.image} alt={product.name} className="product-image" />
            {product.sale && <div className="sale-badge">Sale</div>}
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} next`}
      style={{ ...style, display: 'block', background: 'none', opacity: 1 }}
      onClick={onClick}
    >
      <img
        src={rightArrow}
        alt="Next"
        style={{
          width: '41px',
          height: '22px',
          transform: 'scaleX(-1)', // Отразим правую стрелку зеркально
          transition: 'filter 0.3s ease',
        }}
        className="arrow"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} prev`}
      style={{ ...style, display: 'block', background: 'none', opacity: 1 }}
      onClick={onClick}
    >
      <img
        src={leftArrow}
        alt="Previous"
        style={{
          width: '41px',
          height: '22px',
          transition: 'filter 0.3s ease',
        }}
        className="arrow"
      />
    </div>
  );
}