import React from 'react';
import Header from "./compnonents/Header/Header";
import "./App.css"
import Intro from "./compnonents/Intro/Intro";
import Certificates from "./compnonents/Certificates/Certificates";
import {BrowserRouter, Route , Routes} from "react-router-dom";
import Education from "./compnonents/Education/Education";
import Footer from "./compnonents/Footer/Footer";

const App = () => {
    return (
        // <BrowserRouter>
        //   <Header />
        //   <Intro />
        //   <Education />
        //   <Certificates />
        // </BrowserRouter>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/education" element={<Education/>} />
                <Route path="/certificates" element={<Certificates/>} />
                <Route path="/about-me" element={<Intro/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
