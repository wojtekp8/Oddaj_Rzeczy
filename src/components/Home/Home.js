import React from 'react';
import './Home.scss'
import HomeHeader from "../HomeHeader/HomeHeader";
import ThreeColumns from "../ThreeColumns/ThreeColumns";
import SimpleSteps from "../SimpleSteps/SimpleSteps";
import AboutUs from "../AboutUs/AboutUs";
import WhoWeHelp from "../WhoWeHelp/WhoWeHelp";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";


function Home(){
    return(<>
            <HomeHeader/>

            <ThreeColumns/>
            <SimpleSteps />
            <AboutUs />
            <WhoWeHelp />
            <Contact/>
            <Footer/>
    </>);
}

export default Home;