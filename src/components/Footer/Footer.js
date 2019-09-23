import React,{Component} from 'react';
import './Footer.scss';

class Footer extends Component{
    render(){
        return (<>
            <div className='container'>
                <footer>
                    <div></div>
                    <p>Copyright by CodersLab</p>
                    <ul>
                        <li><a className='facebook' href='#'></a></li>
                        <li><a className='instagram' href='#'></a> </li>
                    </ul>
                </footer>
            </div>
        </>);
    }
}

export default Footer;