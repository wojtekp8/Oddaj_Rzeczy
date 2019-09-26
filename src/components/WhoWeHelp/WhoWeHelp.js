import React,{Component} from 'react';
import './WhoWeHelp.scss';
import '../Menu/Menu.scss';
import WhoWeHelpRecord from "../WhoWeHelpRecord/WhoWeHelpRecord";

// import Column from '../Column/Column'


class WhoWeHelp extends Component{
    state={
        fundations:[{name:'Fundacja "Dbam o zdrowie"',tags:'ubrania, jedzenie, sprzęt AGD, meble,zabawki',description:'pomoc osobom znajdującym się w trudnej sytuacji.'},
            {name:'Fundacja "Dla dzieci"', tags:'ubrania, meble zabawki',description:'Pomoc dzieciom z ubogich rodzin'},
            {name:'Fundacja "Bez domu"', tags:'ubrania, jedzenie, ciepłe koce', description:'Pomoc dla osób nie posiadających miejsca zamieszkania'},
            {name:'Fundacja "Lorem ipsum 1"',tags:'ubrania, meble zabawki',description:'Lorem ipsum dolor sit amet'},
            {name:'Fundacja "Lorem ipsum 2"',tags:'meble zabawki',description:'Lorem ipsum dolor sit amet'},
            {name:'Fundacja "Lorem ipsum 3"',tags:'ubrania, meble',description:'Lorem ipsum dolor sit amet'},
            {name:'Fundacja "Lorem ipsum 4"',tags:'jedzenie, sprzęt AGD, meble,zabawki',description:'Lorem ipsum dolor sit amet'},
            {name:'Fundacja "Lorem ipsum 5"',tags:'ubrania, meble',description:'Lorem ipsum dolor sit amet'},
            {name:'Fundacja "Lorem ipsum 6"',tags:'jedzenie, sprzęt AGD,zabawki',description:'Lorem ipsum dolor sit amet'}],
        organisations:[{name:'Organizacja "Lorem ipsum 1"',tags:'ubrania, meble zabawki',description:'Lorem ipsum dolor sit amet'},
            {name:'Organizacja "Lorem ipsum 2"',tags:'meble zabawki',description:'Lorem ipsum dolor sit amet'},
            {name:'Organizacja "Lorem ipsum 3"',tags:'ubrania, meble',description:'Lorem ipsum dolor sit amet'},
            {name:'Organizacja "Lorem ipsum 4"',tags:'jedzenie, sprzęt AGD, meble,zabawki',description:'Lorem ipsum dolor sit amet'},
            {name:'Organizacja "Lorem ipsum 5"',tags:'ubrania, meble',description:'Lorem ipsum dolor sit amet'},
            {name:'Organizacja "Lorem ipsum 6"',tags:'jedzenie, sprzęt AGD,zabawki',description:'Lorem ipsum dolorsit amet'}],
        local:[{name:'Zbiórka "Lorem ipsum 1"',tags:'ubrania, meble zabawki',description:'Lorem ipsum dolor sit amet'},
            {name:'Zbiórka "Lorem ipsum 2"',tags:'meble zabawki',description:'Lorem ipsum dolor sit amet'},
            {name:'Zbiórka "Lorem ipsum 3"',tags:'ubrania, meble',description:'Lorem ipsum dolor sit amet'}],
        currentPage:1,
        recordPerPage:3,
        currentContent:1           //1:fundations, 2:organisations,3:local

    };

    handleClick=(event,i)=>{this.setState({currentPage:i})};
    setContent=(i)=>{
        console.log('switching to =>'+ i);
        this.setState({currentContent: i})};
    render(){

        const {fundations,organisations,local,currentPage,recordPerPage,currentContent}=this.state;
        let content=0;
        if(currentContent===1){
            content=fundations;
        }else if(currentContent===2){
            content=organisations;
        }else{content=local};

        const indexOfLast=currentPage*recordPerPage;
        const indexOfFirst=indexOfLast-recordPerPage;
        const currentRange=content.slice(indexOfFirst,indexOfLast); //tu trza przerobic na fund org i loc

        const elements=currentRange.map((el,i)=>{
            return <WhoWeHelpRecord key={i} name={el.name} tags={el.tags} description={el.description}/>
        });

        const pageNumber=[];
        const numberOfPages=Math.ceil(content.length/recordPerPage);
        if(numberOfPages>1){
            for (let i = 1; i <= numberOfPages; i++) {
                const element = <li key={i}
                                    onClick={e => this.handleClick(e, i)}
                                    className={this.state.currentPage === i ? "active" : ""}>
                    {i}
                </li>
                pageNumber.push(element);
            }
        }

        return(<>
            <article name='whoWeHelp' className='whoWeHelp'>
                <div className='container'>
                    <div className='navigation banner'>
                        <h2>Komu pomagamy?</h2>
                        <ul className='buttons'>
                            <li><button onClick={e=>this.setContent(1)} className={currentContent===1 ? "active":""}>Fundacjom</button></li>
                            <li><button onClick={e=>this.setContent(2)} className={currentContent===2 ? "active":""}>Organizacjom pozarządowym</button></li>
                            <li><button onClick={e=>this.setContent(3)} className={currentContent===3 ? "active":""}>Lokalnym zbiórkom</button></li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a,
                            scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. </p>
                    </div>
                    <div className='content'>
                        {elements}

                        <ul className='buttons'>
                            {pageNumber}
                        </ul>

                    </div>
                </div>
            </article>
        </>)
    }
}
export default WhoWeHelp;