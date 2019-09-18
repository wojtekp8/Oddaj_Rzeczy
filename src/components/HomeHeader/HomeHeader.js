import React,{Component} from 'react';
import './HomeHeader.scss';
import Menu from '../Menu/Menu'

class HomeHeader extends Component{
    render(){
        return (<>
            <header>
                <div className='logo'> </div>
                <div className='nav'>
                    <div className='box'>
                        <Menu/>
                    </div>
                </div>
            </header>
        </>);
    }
}

export default HomeHeader;