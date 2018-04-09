import React , {Component} from "react";
import Redirect from "react-router-dom/es/Redirect";
import {deleteTokenFromStorage} from "../Services/LocalStorageServices";

class LogoutPage extends React.Component{

    render(){


        deleteTokenFromStorage();

        return(
            <Redirect to={'./login'}/>
        )
    }


}

export  default LogoutPage;