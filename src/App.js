import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Visit from './Pages/Visit';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/visit" element={<Visit />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;