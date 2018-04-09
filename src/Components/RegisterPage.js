import React , {Component} from 'react';
import {register} from "../Services/APIServices";
import Redirect from "react-router-dom/es/Redirect";

class RegisterPage extends React.Component {

    state = {
        isRegister: false,
    };

    registerIt = () => {

        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;
        const rePassword = document.getElementById('repassword').value;

        document.getElementById('password').value = '';
        document.getElementById('repassword').value = '';

        if (!(password === rePassword && (email !== '' && name !== '' && password !== '' && rePassword !== ''))) {
            window.alert("something wrong! type again?");
        }
        else {
            register({email, password, name})
                .then(response => {
                    this.setState({
                        isRegister: true,
                    });
                });
        }

    };


    render() {


        const success = this.state.isRegister;

        if(success){
            return(<Redirect to={'/login'}/>);
        }
        else {



            return(
                <form>
                    <input placeholder={'name'} type={'word'} id={'name'}/>
                    <br/>
                    <input placeholder={'email'} type={'word'} id={'email'}/>
                    <br/>
                    <input placeholder={'password'} type={'password'} id={'password'}/>
                    <br/>
                    <input placeholder={'rewrite password'} type={'password'} id={'repassword'}/>
                    <br/>
                    <button type={'button'} onClick={this.registerIt}>Register!</button>
                </form>

            );
        }

    }


}


export default RegisterPage;