import React, {Component} from 'react';
import Redirect from "react-router-dom/es/Redirect";
import {loginAPI} from "../Services/APIServices";
import {getTokenFromStorage, saveTokenToStorage} from "../Services/LocalStorageServices";



class LoginPage extends React.Component {

    state = {
        isLogin:false,
    }

    loginNow = (e)=>{

        e.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;


        loginAPI({email,password})
            .then(response=>{

                const success = response.success;
                if (success){
                    
                    const token = response.data.accessToken;
                    saveTokenToStorage(token);
                    this.saveLogin();
                }


            });
    };


    componentDidMount(){

        this.saveLogin();

    };

    saveLogin = ()=>{

        let  _isLogin;
        _isLogin = getTokenFromStorage() !== '';
        this.setState({
            isLogin:_isLogin,
        })

    };


    render(){

      const _isLogin = this.state.isLogin;


        if(_isLogin){
          return (<Redirect to={'/'}/>);
        }
        else{
            return(
                <div>
                    <form>
                        <input type={"text"} placeholder={"email"}  id={'loginEmail'}/>
                        <br/>
                        <input type={"password"} placeholder={'password'} id={'loginPassword'}/>
                        <br/>
                        <button onClick={this.loginNow} id={'loginNow'}>Login now!</button>
                    </form>
                </div>
            );
        }


    }


}

export  default  LoginPage;