import React, { Component } from 'react';
import Navbar from '../components/Navbar'


class Landing extends Component {
    render() {
        return (
            <header id="header" class="fixed-top">
            <div class="container d-flex align-items-center">
        
              <h1 class="logo mr-auto"><a href="index.html">Andrena Technology</a></h1>
              <Navbar />
            </div>
            </header>
        );
    }
}

export default Landing