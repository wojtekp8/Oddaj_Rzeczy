import React,{Component} from 'react';
import './Column.scss';


class Column extends Component{
    render(){
        return(<>
            <div className='column'>
                <h1>{this.props.number}</h1>
                <h2>{this.props.text}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia inmi.</p>
            </div>
        </>)
    }
}

export default Column;