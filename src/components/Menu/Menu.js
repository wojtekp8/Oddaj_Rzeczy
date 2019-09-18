import React,{Component} from 'react';
import {HashRouter,Route,Switch,NavLink} from 'react-router-dom';

import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './Menu.scss';

class Menu extends Component{
    render(){
        return (
            <>
                <ul className='menu'>
                    <li><NavLink to='/Zaloguj/' className='loggin'>Zaloguj</NavLink></li>
                    <li><NavLink to='/Zaloz_konto/' className='loggin'>Załóż konto</NavLink></li>
                </ul>
                <ul className='menu'>
                    <li><Link>Start</Link></li>
                    <li><Link>O co chodzi?</Link></li>
                    <li><Link>O nas</Link></li>
                    <li><Link>Fundacja i organizacje</Link></li>
                    <li><Link>Kontakt</Link></li>
                </ul>
                <div className='banner'>
                    <h1>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <ul className='menu'>
                        <li>ODDAJ RZECZY</li>
                        <li>ZOORGANIZUJ ZBIÓRKĘ</li>
                    </ul>
                </div>
            </>
        )
    }

}

export default Menu;