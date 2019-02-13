import React, { Component } from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.css'

class Head extends Component{
    render(){
        return(
            <header>
            <nav class="navbar navbar-expand-lg navbar-light head" >
                <a class="navbar-brand" href="#" id="text_logo">Parser coing</a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav" >
                            <li class="nav-item">
                                <a class="nav-link text-white" id="for_border" href="#">Log in\Sign up</a>
                            </li>
                        </ul>
                    </div>
                </nav>
          </header>
        )
    }
}

export default Head
