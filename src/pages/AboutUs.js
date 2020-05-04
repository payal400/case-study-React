import React from 'react'
import Gym from '../images/gym1.jpg';
import Treatment from '../images/hospital1.jpg';

const AboutUs = () => {
    return (
         <div className="container-fluid" style={{marginTop:'50px'}}>
         <div className="row">
             <div className="col col-md-6" >
               <div className="card bg-dark text-white">
                  <img src={Gym} className="card-img" alt="..." />
                  <div className="card-img-overlay">
                      <h5 className="card-title">Good Morning GYM</h5>
                       <p className="card-text">World-class instructors to motivate and push you through each and every workout</p>
                        <p className="card-text text-uppercase font-weight-bolder">50% OFF Grab it.</p>
                  </div>
                </div>
             </div>
             <div className="col col-md-6">
             <div className="card bg-dark text-white">
                  <img src={Treatment} className="card-img" alt="..." style={{height:'428px'}} />
                  <div className="card-img-overlay">
                      <h5 className="card-title">Hair Treatment</h5>
                       <p className="card-text">Improves the volume of hair.Painless procedure & without any side-effects
                                          </p>
                        <p className="card-text text-uppercase font-weight-bolder">50% OFF Claim it</p>
                  </div>
                </div>
             </div>
         </div>
     </div>
    );
}

export default AboutUs;