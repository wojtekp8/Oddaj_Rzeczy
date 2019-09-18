import React,{Component} from 'react';
import './Home.scss'
import HomeHeader from "../HomeHeader/HomeHeader";
import ThreeColumns from "../ThreeColumns/ThreeColumns";
import SimpleSteps from "../SimpleSteps/SimpleSteps";

function Home(){
    return(<>
            <HomeHeader/>
            <ThreeColumns/>
            <SimpleSteps/>
    </>);
}

export default Home;