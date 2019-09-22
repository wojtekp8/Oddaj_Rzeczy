import React,{Component} from 'react';
import './Home.scss'
import HomeHeader from "../HomeHeader/HomeHeader";
import ThreeColumns from "../ThreeColumns/ThreeColumns";
import SimpleSteps from "../SimpleSteps/SimpleSteps";
import AboutUs from "../AboutUs/AboutUs";
import WhoWeHelp from "../WhoWeHelp/WhoWeHelp";

function Home(){
    return(<>
            <HomeHeader/>
            <ThreeColumns/>
            <SimpleSteps/>
            <AboutUs/>
            <WhoWeHelp/>
    </>);
}

export default Home;