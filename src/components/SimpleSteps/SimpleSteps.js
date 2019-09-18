import React,{Component} from 'react';
import './SimpleSteps.scss';

function SimpleSteps(){
    return(
        <>
            <article className='simpleSteps'>
                <div className='container'>
                    <h2>Wystarczą 4 proste kroki</h2>
                </div>
            </article>
            <article className='simpleStepsIcon'>
                <div className='container'>
                    <div className='step'><h3>Wybierz rzeczy</h3><p>ubrania,zabawki, sprzęt i inne</p></div>
                    <div className='step'><h3>Spakuj je</h3><p>skorzystaj z worków na śmieci</p></div>
                    <div className='step'><h3>Zdecyduj komu chesz pomóc</h3><p>wybierz zaufane miejsce</p></div>
                    <div className='step'><h3>Zamów kuriera</h3><p>kurier przyjedzie w dogodnym terminie</p></div>
                </div>
            </article>
            <article className='simpleSteps'>
                <div className='container'><button>ODDAJ RZECZY</button></div>
            </article>
        </>
    )
}

export default SimpleSteps;