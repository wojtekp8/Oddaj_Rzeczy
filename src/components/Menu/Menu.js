import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import './Menu.scss';

class Menu extends Component{

    render(){
        return (
            <>
                <ul className='menu'>
                    <li><NavLink to='/logowanie' className='loggin'>Zaloguj</NavLink></li>
                    <li><NavLink to='/rejestracja' className='loggin'>Załóż konto</NavLink></li>
                </ul>
                <ul className='menu'>
                    <li><NavLink  exact to={"/"}>Start</NavLink></li>
                    <li><Link activeClass="active"
                        to="simpleSteps"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}>O co chodzi?</Link></li>
                    <li><Link activeClass="active"
                              to="aboutUs"
                              spy={true}
                              smooth={true}
                              offset={0}
                              duration= {500}>O nas</Link></li>
                    <li><Link activeClass="active"
                              to="whoWeHelp"
                              spy={true}
                              smooth={true}
                              offset={0}
                              duration= {500}>Fundacja i organizacje</Link></li>
                    <li><Link activeClass="active"
                              to="contact"
                              spy={true}
                              smooth={true}
                              offset={0}
                              duration= {500}>Kontakt</Link></li>
                </ul>
                <div className='banner'>
                    <h1>Zacznij pomagać!</h1>
                    <h2> Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <ul className='menu'>
                        <li><NavLink to='/logowanie' className='loggin'>ODDAJ RZECZY</NavLink></li>
                        <li><NavLink to='/logowanie' className='loggin'>ZOORGANIZUJ ZBIÓRKĘ</NavLink></li>
                    </ul>
                </div>
            </>
        )
    }

}

export default Menu;