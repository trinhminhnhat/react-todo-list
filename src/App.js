// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Todos from './component/Todos';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
