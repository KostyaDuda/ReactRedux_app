import React, { Component } from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.css'

class Head_regisrt extends Component{
    render(){
        return(
            <header>
            <nav class="navbar navbar-expand-lg navbar-light head" >
                <a class="navbar-brand" href="#" id="text_logo">Parser coing</a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav" >
                            <li class="nav-item active" id="margin_logo" class="draw" >
                                <a class="nav-link text-white"   href="#">My Coins</a>
                            </li>
                            <li class="nav-item active" id="margin_logo" class="draw" >
                                <a class="nav-link text-white"   href="#">Add Coins</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" id="for_border" href="#">Log out</a>
                            </li>
                        </ul>
                    </div>
                </nav>
          </header>
        )
    }
}

export default Head_regisrt
