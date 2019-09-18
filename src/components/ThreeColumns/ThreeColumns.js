import React,{Component} from 'react';
import './ThreeColumns.scss'
import Column from '../Column/Column'


class ThreeColumns extends Component{
    render(){
        return(<>
            <article className='threeColumns'>
                <div className='container'>
                    <Column number={10} text='ODDANYCH WORKÓW'/>
                    <Column number={5} text='WSPARTYCH ORGANIZACJI'/>
                    <Column number={7} text='ZOORGANIZOWANYCH ZBIÓREK'/>
                </div>
            </article>
        </>)
    }
}
export default ThreeColumns;