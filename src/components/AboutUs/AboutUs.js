import React,{Component} from 'react';
import './AboutUs.scss';

class AboutUs extends Component{
    render(){
        return (<>
            <article name='aboutUs' className='aboutUs'>
                <div className='description'>
                    <div className='box'>
                        <h2>O nas</h2>
                        <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya
                            nuts black-eyed pea prairie turnip leek lentil turnip greens parnsnip.</p>
                    </div>
                </div>
                <div className='peopleImg'></div>
            </article>
        </>);
    }
}

export default AboutUs;