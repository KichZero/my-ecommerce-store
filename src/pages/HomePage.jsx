// MAIN PAGE 
import React from 'react';
import '../styles/homeFirst.css'
import MainCard from '../components/cards/MainCard';


const HomePage = () => {
  return (
    <div>
    <div className='homeMain'>
      <img className='textHome' src="./HomeText.svg" alt="" />
     
    </div>
    <MainCard/>
    </div>
  );
};

export default HomePage;