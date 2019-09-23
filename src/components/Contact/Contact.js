import React,{Component} from 'react';
import './Contact.scss';

class Contact extends Component{
    render(){
        return (<>
            <article className='contact'>
                <div className='contactImg'></div>
                <div className='form'>
                    <h2>Skontaktuj się z nami</h2>

                    <form>
                        <div>
                            <label>Wprowadź swoje imię</label><input type="text" value="Imię"/>
                        </div>
                        <div>
                            <label>Wpisz swój e-mail</label><input type="email" value="e-mail"/>
                        </div>
                        <div>
                            <label>Wpisz swoją wiadomość</label><textarea>neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem neque porro quisquam est,neque porro quisquam est. </textarea>
                            <button type="submit" >WYŚLIJ</button>
                        </div>
                    </form>

                </div>
            </article>
        </>);
    }
}

export default Contact;