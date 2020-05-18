import React, { Component } from 'react';
import Navitem from '../contents/Navitem';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'NavItemActive': ''
    }
  }
  activeitem = (x) => {
    if(this.state.NavItemActive){
      document.getElementById(this.state.NavItemActive).classList.remove('active');
    }
    if(x !== this.state.NavItemActive){
      this.setState({ 'NavItemActive': x }, () => {
        document.getElementById(x).classList.add('active');
      });
    }
  };
  render() {
    return (

      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
          <Navitem item="Services Offered" tolink="/about" activec={this.activeitem}></Navitem>
          <Navitem item="About" tolink="/education" activec={this.activeitem}></Navitem>
          <Navitem item="Contact" tolink="/contact" activec={this.activeitem}></Navitem>
        </ul>
      </nav>
    )
  }
}
export default Navbar