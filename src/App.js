// import logo from './logo.svg';
import React, {Fragment} from 'react';
import './App.css';
import Header from './component/Header';
import Todos from './component/Todos';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
    <Fragment>
      <Header />
      <Todos />
    </Fragment>
   
  );
}

export default App;
