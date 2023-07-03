
import './App.scss'
import AboutProduct from './components/AboutProduct'
import Apresentation from './components/Apresentation'
import Bonus from './components/Bonus'
import CommonQuestions from './components/CommonQuestions'
import Complications from './components/Complications'
import Failure from './components/Failure'
import Footer from './components/Footer'
import Header from './components/Header'
import HowToUse from './components/HowToUse'
import InfoDetails from './components/InfoDetails'
import Offer from './components/Offer'
import Product from './components/Product'
import WhoIsUs from './components/WhoIsUs'
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const utmParamQueryString = new URLSearchParams(window.location.search);
    if (utmParamQueryString.toString()) {
      const navLinks = document.querySelectorAll('a');
      navLinks.forEach(function (item) {
        if (item.href.indexOf('https://sun.eduzz.com') !== -1) {
          if (item.href.indexOf('?') === -1) {
            item.href += '?' + utmParamQueryString.toString();
          } else {
            item.href += '&' + utmParamQueryString.toString();
          }
        }
      });
    }
  }, []);
  

  return (
    <>
      <Header />
      <Apresentation />
      <Complications />
      <Failure />
      <Product />
      <AboutProduct />
      <HowToUse />
      <InfoDetails /> 
      <Bonus />
      <Offer />
      <CommonQuestions />
      <WhoIsUs />
      <Footer/>
    </>

    
  )
}

export default App
