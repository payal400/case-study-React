import React, { Component } from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap';

class Signin extends Component {
    
    render(){
        return(     
 <div>
    <div className="modal-body">
        <h2>Sign In and Get <span>Started</span></h2>
        <span className="subtitle">Just fill in the form below</span>
        <form className="contact-form form-validate4" novalidate="novalidate">
            <div className="form-group">
                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
            </div>
            <div className="form-group">
                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
            </div>
            <input className="btn btn-md btn-primary btn-center" id="login_btn" type="button" value="SIgn In" />
        </form>
    </div>
</div>
        );
    }
}

export default Signin;