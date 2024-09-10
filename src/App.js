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
import {useRef} from "react";
// import React from "@types/react";

function App() {
    // const contacts = useRef(null);
    // const scrollToSection = (elementRef) =>{
    //     window.scrollTo({
    //         top: elementRef.current.offsetTop,
    //         behavior: "smooth"
    //     })
    // }
    function handleClick(elementRef) {
        elementRef.current?.scrollIntoView({behavior: "smooth"})
    }
    const contacts = useRef(0);

  return (
      <div className="App">
        <Header handleClick={handleClick} contacts={contacts} className={styles.header}/>
          <ScrollToTop/>
           <Routes  className={styles.mainBlock}>
             <Route path="/" element={<Home contacts={contacts}/>}/>
               <Route path="/shopAll" element={<ShopAll/>} />
               <Route path="/christmasTrees" element={<ChristmasTrees/>} />
               <Route path="/uniqueOrnaments" element={<UniqueOrnaments/>} />
               <Route path="/holidayLights" element={<HolidayLights/>} />
               <Route path="/about" element={<About/>} />
               <Route path="/contacts" element={<Contacts/>} />
               {/*<Route path="*" element={<NoPage />} />*/}

           </Routes>
        <Footer className={styles.footer}/>
      </div>
  );
}

export default App;
