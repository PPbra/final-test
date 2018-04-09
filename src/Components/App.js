import React , {Component} from 'react';
import '../StyleSheets/App.css';
import {Route,Switch} from 'react-router-dom';
import Home from './Home.js';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import NavBar from "./NavBar";
import LogoutPage from "./LogoutPage";


class App extends  React.Component{

        /*state = {
            auth: false,
        };*/

    /*componentDidMount(){

        const token = getTokenFromStorage();

        if(token===''){
            this.setState({
                auth:false,
            });
        }else{
            this.setState({
                auth:true,
            });
        }
    }*/


    /*appAuth = (e) =>{

        this.setState({

            auth:e,
        })
    };*/





    render(){

        /*const auth = this.state.auth;
        return(

            <div>
                <NavBar authIn={auth} />
                <Switch>
                    <Route exact path={'/'} component= {()=> <Home appAuthHome={auth}/>}/>
                    <Route exact path={'/login'} component= {()=><LoginPage appAuthChange ={this.appAuth} appAuthLogin={auth}/>}/>
                    <Route exact path={'/register'} component= {() => <RegisterPage />}/>
                    <Route exact path={'/logout'} component= {() => <LogoutPage appAuthChange={this.appAuth}/>}/>
                </Switch>
            </div>

        )*/

        return(

            <div>
                <NavBar />
                <Switch>
                    <Route exact path={'/'} component= {()=> <Home />}/>
                    <Route exact path={'/login'} component= {()=><LoginPage />}/>
                    <Route exact path={'/register'} component= {() => <RegisterPage />}/>
                    <Route exact path={'/logout'} component= {() => <LogoutPage />}/>
                </Switch>
            </div>

        )

    }
}

export  default  App;
