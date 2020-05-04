import React from 'react';
import imgs from '../images/pizza.jpg';
import imgs1 from '../images/saloon.jpg';
import imgs2 from '../images/hotel.jpg';
const cards = () => {
    return(
    <>
    <div className="container-fluid" style={{marginTop:'30px', marginBottom:'30px'}}>
    <div className="row">
     <div className="col col-md-4">
        <div className="card">
             <img src={imgs} className="card-img-top" alt="..." />
           <div className="card-body">
             <h5 className="card-title">Zio D's Pizza</h5>
             <p className="card-text text-success text-uppercase font-weight-bolder">30%  Cash Back</p>
             <p className="card-text">Free to Claim</p>
             <p className="card-text">GrabOn</p>
           </div>
           <div className="card-footer">
             <small className="text-muted">Last updated 3 mins ago</small>
          </div>
       </div>
    </div>
  
        <div className="col col-md-4">
        <div className="card">
             <img src={imgs1} className="card-img-top" alt="..." style={{height:'254px'}}/>
           <div className="card-body">
             <h5 className="card-title">Skinsational Advance Skincare</h5>
             <p className="card-text text-success text-uppercase font-weight-bolder">60%  Cash Back</p>
             <p className="card-text">Free to Claim</p>
             <p className="card-text">GrabOn</p>
           </div>
           <div className="card-footer">
             <small className="text-muted">Last updated 3 mins ago</small>
          </div>
       </div>
     </div>
        
        <div className="col col-md-4">
        <div className="card">
             <img src={imgs2} className="card-img-top" alt="..." style={{height:'254px'}}/>
           <div className="card-body">
             <h5 className="card-title">Hotel Prime</h5>
             <p className="card-text text-success text-uppercase font-weight-bolder">50%  Cash Back</p>
             <p className="card-text">Free to Claim</p>
             <p className="card-text">GrabOn</p>
           </div>
           <div className="card-footer">
             <small className="text-muted">Last updated 3 mins ago</small>
          </div>
       </div>
        </div>
        
    </div>
</div>
<hr></hr>
</>
    );
}
 
export default cards;