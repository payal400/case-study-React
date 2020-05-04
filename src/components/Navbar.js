import React, { Component } from 'react';
import logo from '../images/th1.jpg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  state={
    isOpen:false
}
handleToggle = () => {
   this.setState({isOpen:!this.state.isOpen66})
}

onNavigationSignIn(){
 
}
  
    render(){
    
      let addModalClose = () => this.setState({addModalShow:false});

      return(
        <nav className="navbar">
          <div className="nav-center">
          <div className="nav-header">
             <img src={logo} height="100%" alt="GrabOn" />
             <button type="button" className="nav-btn" onClick={this.handleToggle}>
                  <FaAlignRight className="nav-icon" />
             </button>
          </div> 
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li><Link to="/" style={{fontSize:'18px'}}>Home</Link></li>
            <li><Link to="/categories" style={{fontSize:'18px'}}>Categories</Link></li>
            <li><Link to="/News"style={{fontSize:'18px'}}>News</Link></li>
            <li><Link to="/AboutUs"style={{fontSize:'18px'}}>AboutUs</Link></li>

            <form class="navbar-form navbar-left" role="search" style={{marginRight:'5px'}}>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search"/>
                </div>
                <button type="submit" class="btn btn-default" style={{marginRight:'25px'}}>
                    <span class="glyphicon glyphicon-search"></span>
                </button>
           </form>

            <button className="btn  btn-outline-dark" style={{marginRight:'10px', height:'40px',width:'110px'}}
                     onClick={this.onNavigationSignIn} >SIGN IN
            </button>
            <button className="btn btn-dark"style={{height:'40px',width:'115px'}}
                    >SIGN UP</button>
          </ul>
          </div>
         </nav>
      );
    };
}

export default Navbar;