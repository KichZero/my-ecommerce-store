import React from 'react';
import '../../styles/allCard/newcollection.css'; // Стили для блока

const CollectionBlock = () => {
  const collections = [
    {
      title: 'Spring Dresses',
      subtitle: 'Fresh and Flowy for the Season',
      img: '../public/Cards/newcol.svg', // путь к изображению
      link: '/spring-dresses',  // ссылка на раздел
    },
    {
      title: 'Checkered Chic',
      subtitle: 'Bold Patterns, Timeless Style',
      img: '../public/Cards/newcol2.svg', // путь к изображению
      link: '/checkered-chic',  // ссылка на раздел
    },
    {
      title: 'Modern Classics',
      subtitle: 'Suits with Timeless Style',
      img: '../public/Cards/newcol3.svg', // путь к изображению
      link: '/modern-classics',  // ссылка на раздел
    },
  ];

  return (
    <div className="collection-container">
      <h2>New Collection</h2>
      <div className="collection-grid">
        {collections.map((item, index) => (
          <a key={index} href={item.link} className="collection-card">
            <div className="card-image">
              <img src={item.img} alt={item.title} />
              <span className="new-badge">New</span>
            </div>
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <button className="shop-button">SHOP NOW</button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CollectionBlock;
