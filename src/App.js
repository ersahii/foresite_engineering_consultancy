import './App.css';
import React from 'react';
// import Navbar from './Supreme_container/navbar/Navbar';
import Projects from './Supreme_container/projects/Projects';
import Header from './Supreme_container/header/Header';
// import About from './Supreme_container/about_us/About';
import Footer from './Supreme_container/footer/Footer';
const App = () => {
  return (
    <>
      <Header />
      <Projects/>
      <Footer/>
      {/* <Navbar /> */}
    </>
  );
}

export default App;
