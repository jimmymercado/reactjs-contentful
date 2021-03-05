import React from 'react';
import '../assets/css/main.css';
import Feature1 from '../components/Feature1';
import Portfolio from '../components/Porfolio';
import Accordion from '../components/Accordion';
import Carousel from '../components/Carousel';

const Home = () => {
  return(
    <div>
      <Carousel/>
      <Feature1/>      
      <Portfolio/>      
      <Accordion/>
    </div>
  );

}
export default Home;