import React,{Component} from 'react';
import './Home.scss'
import HomeHeader from "../HomeHeader/HomeHeader";
import ThreeColumns from "../ThreeColumns/ThreeColumns";

function Home(){
    return(<>
            <HomeHeader/>
            <ThreeColumns/>
    </>);
}

export default Home;