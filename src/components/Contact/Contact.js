import React,{Component} from 'react';
import './Contact.scss';

class Contact extends Component{
    state = {
        serverResponseStatus:false,
        name: "",
        email: "",
        message:"",
        nameError: false,
        emailError: false,
        messageError: false
    };

    handleNameChange= e => {
        this.setState({ name: e.target.value });
    };
    handleEmailChange= e => {
        this.setState({ email: e.target.value });
    };
    handleMessageChange= e => {
        this.setState({ message: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        //Walidacja
        let name=this.state.name.split(" "); //imie musi składać się conajmniej z 2 znaków i nie moze zawierac wiecej niz jednego słowa
        if (name.length>1 || this.state.name.length<2) {
            this.setState({nameError: true});
        }else {
            this.setState({nameError: false});
        }

        function validateEmail(email) {
            let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        if(validateEmail(this.state.email)){
            this.setState({emailError:false})
        }else{
            this.setState({emailError:true})
        }

        if(this.state.message.length<120){
            this.setState({messageError:true})
        }else{
            this.setState({messageError:false})
        }

        if(this.state.nameError || this.state.emailError || this.state.messageError){
            return;
        }else {
            const obj = {name: this.state.name, email: this.state.email, message: this.state.message};
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                headers: {"Content-Type": "application/json"},
                method: 'POST',
                body: JSON.stringify(obj)
            }).then(resp => {
                if(resp.status===200){
                    this.setState({serverResponseStatus:true});
                };
            });
            return;
        }


    };

    render(){
        let nameError=null;
        let emailError=null;
        let messageError=null;
        let succes=null;
        if(this.state.nameError){
             nameError=<h3>Podane imię jest nieprawidłowe!</h3>
        }
        if(this.state.emailError){
            emailError=<h3>Podany email jest nieprawidłowy!</h3>
        }
        if(this.state.messageError){
            messageError=<h3>Wiadomość musi zawierać conajmniej 120 znaków!</h3>
        }
        if(this.state.serverResponseStatus){
            succes=<><h3>Wiadomość została wysłana!</h3><h3>Wkrótce się skontaktujemy!</h3></>
        }

        return (<>

            <article name='contact' className='contact'>
                <div className='contactImg'></div>
                <div className='form'>
                    <h2>Skontaktuj się z nami</h2>
                    {succes}
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Wprowadź swoje imię</label><input onChange={this.handleNameChange} type="text" placeholder="Imię"/>
                            {nameError}
                        </div>
                        <div>
                            <label>Wpisz swój e-mail</label><input onChange={this.handleEmailChange} type="email" placeholder="e-mail"/>
                            {emailError}
                        </div>
                        <div>
                            <label>Wpisz swoją wiadomość</label><textarea onChange={this.handleMessageChange} placeholder='neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem neque porro quisquam est,neque porro quisquam est.'></textarea>
                            {messageError}
                            <button type="submit" >WYŚLIJ</button>
                        </div>
                    </form>

                </div>
            </article>
        </>);
    }
}

export default Contact;