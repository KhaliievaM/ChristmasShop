import React from "react";
import {Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Menu/Home/Home";
import ShopAll from "./Components/Menu/ShopAll/ShopAll";
import UniqueOrnaments from "./Components/Menu/UniqueOrnaments/UniqueOrnaments";
import HolidayLights from "./Components/Menu/HolidayLights/HolidayLights";
import Contacts from "./Components/Menu/Contacts/Contacts";
import About from "./Components/Menu/About/About";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import {useRef} from "react";
import ChristmasTrees from "./Components/Menu/ChristmasTrees/ChristmasTrees";
import PrivacyPolicy from "./Components/Footer/InformationBlockFooter/PrivacyPolicy/PrivacyPolicy";
import FAQ from "./Components/Footer/InformationBlockFooter/FAQ/FAQ";
import ShippingAndReturns from "./Components/Footer/InformationBlockFooter/ShippingAndReturn/ShippingAndReturns";
import ProductPage from "./Components/Menu/TemplateFiles/ProductTemplate/Product_Page/ProductPage";
import Cart from "./Components/Menu/Cart/Cart";
import QuickView from "./Components/Menu/TemplateFiles/ProductTemplate/QuickView/QuickView"
import ProductPageSwitcher
    from "./Components/Menu/TemplateFiles/ProductTemplate/ProductPageSwitcher_ProductPage/ProductPageSwitcher";
import {logDOM} from "@testing-library/react";

// import React from "@types/react";

function App() {
    // function handleClick(elementRef) {
    //     elementRef.current?.scrollIntoView({behavior: "smooth"})
    // }


    return (
        <div className="App">
            <div className="header">
                {/*<Header className="header" handleClick={handleClick} contacts={contacts}/>*/}
                <Header className="header"/>
            </div>
            <ScrollToTop/>
            <div className="mainBlock">
                <Routes>
                    {/*<Route path="/" element={<Home contacts={contacts}/>}/>*/}
                    <Route path="/" element={<Home/>}/>
                    <Route path="/shopAll" element={<ShopAll/>}/>
                    <Route path="/christmasTrees" element={<ChristmasTrees/>}/>
                    <Route path="/uniqueOrnaments" element={<UniqueOrnaments/>}/>
                    <Route path="/holidayLights" element={<HolidayLights/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/privacyPolicy" element={<PrivacyPolicy/>}/>
                    <Route path="/FAQ" element={<FAQ/>}/>
                    <Route path="/shippingAndReturns" element={<ShippingAndReturns/>}/>
                    <Route path="/productPageSwitcher/product/:id" element={<ProductPageSwitcher/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/quickView" element={<QuickView/>}/>
                    {/*<Route path="*" element={<NoPage />} />*/}
                </Routes>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
}

export default App;
// const contacts = useRef(null);
// const scrollToSection = (elementRef) =>{
//     window.scrollTo({
//         top: elementRef.current.offsetTop,
//         behavior: "smooth"
//     })
// }

