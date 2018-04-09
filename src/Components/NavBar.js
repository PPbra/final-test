import React , {Component} from "react";
import {Link} from "react-router-dom";
import {getTokenFromStorage} from "../Services/LocalStorageServices";


class NavBar extends  React.Component {



    render(){

        /*const auth = this.props.authIn;*/

        let  auth;

        auth = getTokenFromStorage() !== '';

        const login = auth ? null:<Link  id={"login"} to='/login'>Login</Link>;
        const home = <Link  id={"home"} to='/'>Home</Link>;
        const register = auth ? null:<Link  id={"register"} to='/register'>Register</Link>;
        const logout = !auth ? null:<Link id={'logout'} to={'/logout'}>Logout</Link>;

        return (
            <div id={"navbar"}>
                <li className={"navBar"}>
                    {home}
                    {login}
                    {register}
                    {logout}
                </li>
            </div>

        )
    }

}

export default NavBar;