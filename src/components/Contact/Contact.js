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
        let name=this.state.name.split(" ");
        (name.length>1 || this.state.name.length<2)?this.setState({nameError: true}) : this.setState({nameError: false});
    };
    handleEmailChange= e => {
        this.setState({ email: e.target.value });
        this.setState({emailError:this.validateEmail(this.state.email)});
    };
    handleMessageChange= e => {
        this.setState({ message: e.target.value });
        (this.state.message.length<120) ? this.setState({messageError:true}) : this.setState({messageError:false});
    };
    validateEmail=(email)=> {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !re.test(email);
    }
    handleSubmit = e => {
        e.preventDefault();
        //Walidacja
        // let name=this.state.name.split(" "); //imie musi składać się conajmniej z 2 znaków i nie moze zawierac wiecej niz jednego słowa
        // if (name.length>1 || this.state.name.length<2) {
        //     this.setState({nameError: true});
        // }else {
        //     this.setState({nameError: false});
        // }
        // let name=this.state.name.split(" ");
        // (name.length>1 || this.state.name.length<2)?this.setState({nameError: true}) : this.setState({nameError: false});

        // this.setState({emailError:this.validateEmail(this.state.email)});

        // if(this.state.message.length<120){              //trójargumentowy if
        //     this.setState({messageError:true})
        //     console.log('tu true')
        // }else{
        //     this.setState({messageError:false})
        //     console.log('tu false')
        // }
        // (this.state.message.length<120) ? this.setState({messageError:true}) : this.setState({messageError:false});

        if(!this.state.nameError && !this.state.emailError && !this.state.messageError) {
            const {name,email,message} = this.state;
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                headers: {"Content-Type": "application/json"},
                method: 'POST',
                body: JSON.stringify({name,email,message})
            }).then(resp => {
                if (resp.status === 200) {
                    this.setState({serverResponseStatus: true});
                }
            });
        }
    };

    render(){
        return (<>
            <article name='contact' className='contact'>
                <div className='contactImg'></div>
                <div className='form'>
                    <h2>Skontaktuj się z nami</h2>
                    {this.state.serverResponseStatus && <><h3>Wiadomość została wysłana!</h3><h3>Wkrótce się skontaktujemy!</h3></>}
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Wprowadź swoje imię</label><input onChange={this.handleNameChange} type="text" placeholder="Imię"/>
                            {this.state.nameError && <h3>Podane imię jest nieprawidłowe!</h3>}
                        </div>
                        <div>
                            <label>Wpisz swój e-mail</label><input onChange={this.handleEmailChange} type="email" placeholder="e-mail"/>
                            {this.state.emailError && <h3>Podany email jest nieprawidłowy!</h3>}
                        </div>
                        <div>
                            <label>Wpisz swoją wiadomość</label><textarea onChange={this.handleMessageChange} placeholder='neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem neque porro quisquam est,neque porro quisquam est.'></textarea>
                            {this.state.messageError && <h3>Wiadomość musi zawierać conajmniej 120 znaków!</h3>}
                            <button type="submit" >WYŚLIJ</button>
                        </div>
                    </form>
                </div>
            </article>
        </>);
    }
}

export default Contact;