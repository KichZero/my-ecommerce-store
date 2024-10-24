import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../styles/allCard/recommendedprod.css';

// Импортируем SVG как обычное изображение
import leftArrow from '../../../public/Cards/arrow.svg';
import rightArrow from '../../../public/Cards/arrow.svg';

const products = [
  {
    id: 1,
    name: 'UPDATE Denim Set - Jacket & Jeans',
    price: 25.00,
    image: 'public/Cards/reprod.svg',
    sale: true,
  },
  {
    id: 2,
    name: 'UPDATE Yellow Midi Dress by  Sunrise Couture',
    price: 14.00,
    image: 'public/Cards/reprod2.svg',
    sale: true,
  },
  {
    id: 3,
    name: 'UPDATE Men’s Patterned Sweater by Nordic Threads',
    price: 32.70,
    image: 'public/Cards/reprod3.svg',
    sale: true,
  },
  {
    id: 4,
    name: 'UPDATE Men’s Wool Overcoat by  Urban Gent',
    price: 78.00,
    image: 'public/Cards/reprod4.svg',
    sale: true,
  },
  {
    id: 5,
    name: 'name what do you need',
    price: 25.00,
    image: 'public/Cards/special1.svg',
    sale: true,
  },
  {
    id: 6,
    name: 'name what do you need',
    price: 25.00,
    image: 'public/Cards/special1.svg',
    sale: true,
  },
];

export default function RecProduct() {
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
    <div className="rec-slider-container">
    <h2>Recommended Products</h2>
    <Slider {...settings}>
      {products.map((product) => (
        <div className="rec-product-card" key={product.id}>
          <img src={product.image} alt={product.name} className="rec-product-image" />
          <h3 className="rec-product-name">{product.name}</h3>
          <p className="rec-price">${product.price.toFixed(2)}</p>
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
          transform: 'scaleX(-1)', // Зеркально отображаем правую стрелку
          transition: 'filter 0.3s ease', // Плавный переход цвета при наведении
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
          transition: 'filter 0.3s ease', // Плавный переход цвета при наведении
        }}
        className="arrow"
      />
    </div>
  );
}
