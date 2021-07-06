// import logo from './logo.svg';
import React, {Fragment} from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Todos from './component/Todos';

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className="app">
        <Todos />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
