import React from "react";
import { Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Menu/Home/Home";
import ShopAll from "./Components/Menu/ShopAll/ShopAll";
import ChristmasTrees from "./Components/Menu/ChristmasTrees/ChristmasTrees";
import UniqueOrnaments from "./Components/Menu/UniqueOrnaments/UniqueOrnaments";
import HolidayLights from "./Components/Menu/HolidayLights/HolidayLights";
import Contacts from "./Components/Menu/Contacts/Contacts";
import About from "./Components/Menu/About/About"
import Footer from "./Components/Footer/Footer"
import styles from "./App.css"
import ScrollToTop from "./Components/ScrollToTop";
// import React from "@types/react";

function App() {
  return (
      <div className="App">
        <Header/>
          <ScrollToTop/>
           <Routes>
             <Route path="/" element={<Home/>}/>
               <Route path="/shopAll" element={<ShopAll/>} />
               <Route path="/christmasTrees" element={<ChristmasTrees/>} />
               <Route path="/uniqueOrnaments" element={<UniqueOrnaments/>} />
               <Route path="/holidayLights" element={<HolidayLights/>} />
               <Route path="/about" element={<About/>} />
               <Route path="/contacts" element={<Contacts/>} />
               {/*<Route path="*" element={<NoPage />} />*/}

           </Routes>
        <Footer/>
      </div>
  );
}

export default App;
