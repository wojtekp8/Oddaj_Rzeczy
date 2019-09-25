import React,{Component} from "react";
import './WhoWeHelpRecord.scss';


class WhoWeHelpRecord extends Component{
    render(){
        return(<>
            <div className='record'>
                <div className='titleTags'>
                    <h3>{this.props.name}</h3>
                    <p className='tags'>{this.props.tags}</p>
                </div>
                <div className='description'>
                    <p className='description'>Cel i misja: {this.props.description}.</p>
                </div>
            </div>
        </>)
    }
}

export default WhoWeHelpRecord;