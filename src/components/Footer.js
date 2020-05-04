import React from 'react';
import imag from '../images/myntralogo.jpg';

const Footer = () => {

    return (
       <div className="main-footer">
         <div className="container">
			 <div className="row">
				 {/* column1 */}
				 <div className="col">
					 <h4>This jjd</h4>
					 <ul className="list-unstyled">
                        <li>hello</li>
						<li>hiiii</li>
						<li>thereee</li>
					 </ul>
				 </div>
				  {/* column2 */}
			     <div className="col">
				     <h4>This jjd</h4>
					 <ul className="list-unstyled">
                        <li>hello</li>
						<li>hiiii</li>
						<li>thereee</li>
					 </ul>
				 </div>
				   {/* column3 */}
				 <div className="col">
				     <h4>This jjd</h4>
					 <ul className="list-unstyled">
                        <li>hello</li>
						<li>hiiii</li>
						<li>thereee</li>
					 </ul>
				 </div>
			 </div>
			 <hr />
			 <div  className="row">
                <p className="col-sm">
                   &copy;{new Date().getFullYear()} Hiiiiiii  |  ALl rights Reserved | Terms of service | Privacy
				</p>
			 </div>
		 </div>
       </div>
     );
 }

 export default Footer;


//  <div className="f">
//  <p className="hed"><span style={{fontSize: '50px', color:'white'}}>Follow Us</span><br/>
//   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in. </p>
//  <figure className="fig">
//    <img src={imag}/>
//    <img src={imag}/>
//    <img src={imag}/>
//    <img src={imag}/>
// </figure>
// </div>
// <div className="f">
// <h1 className="text-light">Our Services</h1>
// <ul className="ul3">
//    <li><a href="/">Lorem ipsum dolor sit amet</a></li>
//    <li><a href="/">Lorem ipsum dolor sit amet</a></li>
//    <li><a href="/">Lorem ipsum dolor sit amet</a></li>
//    <li><a href="/">Lorem ipsum dolor sit amet</a></li>
//    <li><a href="/">Lorem ipsum dolor sit amet</a></li>
// </ul>
// </div>
// <div className="f">
//   <p className="hed"><span style={{fontSize: '50px', color:'white'}}>Testimonals</span><br/>
// 	  "Lorem ipsum dolor sit amet, consectnetur adipisicing elit, sed do eiusmod tempor in. 
// 	  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in."
//   </p>
//   <p className="p6">-John Smith NY </p>
// </div>
// <p className="p7"> &copy Copyright 2014-2015.All Rights Reserved | Designed by:buylandingpagedesign.com</p>