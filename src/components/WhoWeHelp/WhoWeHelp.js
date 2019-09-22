import React,{Component} from 'react';
import './WhoWeHelp.scss'
import '../Menu/Menu.scss'
// import Column from '../Column/Column'


class WhoWeHelp extends Component{
    render(){
        return(<>
            <article className='whoWeHelp'>
                <div className='container'>
                    <div className='navigation banner'>
                        <h2>Komu pomagamy?</h2>
                        <ul className='buttons'>
                            <li><button>Fundacjom</button></li>
                            <li><button>Organizacjom pozarządowym</button></li>
                            <li><button>Lokalnym zbiórkom</button></li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a,
                            scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. </p>
                    </div>
                    <div className='content'>
                        <div className='record'>
                            <div className='titleTags'>
                                <h3>Fundacja 'Dbam o zdrowie</h3>
                                <p className='tags'>urania, jedzenie, sprzęt</p>
                            </div>
                            <div className='description'>
                                <p className='description'>Cel i misja: pomoc osobom znajdującym się w trudnej sytuacji.</p>
                            </div>
                        </div>
                        <div className='record'>
                            <div className='titleTags'>
                                <h3>Fundacja 'Dbam o zdrowie</h3>
                                <p className='tags'>urania, jedzenie, sprzęt</p>
                            </div>
                            <div className='description'>
                                <p className='description'>Cel i misja: pomoc osobom znajdującym się w trudnej sytuacji.</p>
                            </div>
                        </div>
                        <div className='record'>
                            <div className='titleTags'>
                                <h3>Fundacja 'Dbam o zdrowie</h3>
                                <p className='tags'>urania, jedzenie, sprzęt</p>
                            </div>
                            <div className='description'>
                                <p className='description'>Cel i misja: pomoc osobom znajdującym się w trudnej sytuacji.</p>
                            </div>
                        </div>
                        <ul className='buttons'>
                            <li><button>1</button></li>
                            <li><button>2</button></li>
                        </ul>
                    </div>
                </div>
            </article>
        </>)
    }
}
export default WhoWeHelp;