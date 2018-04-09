import React, {Component} from 'react';
import Redirect from "react-router-dom/es/Redirect";
import {loginAPI} from "../Services/APIServices";
import {getTokenFromStorage, saveTokenToStorage} from "../Services/LocalStorageServices";
import {Link} from "react-router-dom";


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
                <div id={"login-box"}>

                    <form className={"loginForm"}>

                        <h1 id={"loginh1"}>Log In</h1>
                        <input type={"text"} placeholder={"email"}  id={'loginEmail'}/>
                        <input type={"password"} placeholder={'password'} id={'loginPassword'}/>
                        <input type="submit" name="login_submit" value={"Log In"} onClick={this.loginNow}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Link id={"suggest"} to={"/register"}>You don't have account?Sing up now!</Link>
                    </form>
                </div>

            );
        }


    }


}

export  default  LoginPage;