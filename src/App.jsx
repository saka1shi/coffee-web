import React from 'react';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Menu from './pages/Menu/Menu.jsx';
import Footer from './components/Footer/Footer.jsx';
import Location from './pages/Location/Location.jsx';
import About from './pages/About/About.jsx';
import Card from './pages/Card/Card.jsx';
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx';
import News from './pages/News/News.jsx';
import Error from './pages/Error/Error.jsx';
import NewsDetails from './pages/NewsDetails/NewsDetails.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/menu"  element={<Menu/>}/>
          <Route path="/locations" element={<Location/>}  />
          <Route path="/about" element={<About />} /> 
          <Route path="/card" element={<Card />} /> 
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path='/news' element={<News/>} /> 
          <Route path='/newsdetails/:id' element={<NewsDetails/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
