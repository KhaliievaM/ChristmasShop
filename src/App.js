
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Menu/Home/Home";
import About from "./Components/Menu/About/About"
import Footer from "./Components/Footer/Footer"
import styles from "./App.css"
// import React from "@types/react";

function App() {
  return (
    <div className="App">
      <Header/>
        <About/>
        {/*<Home/>*/}
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
        <Footer/>
    </div>
  );
}

export default App;
