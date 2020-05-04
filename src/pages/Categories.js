import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

import MyntraLogo from '../images/myntralogo.jpg';
import Colorbar from '../images/colorbar.jpg';
import Udemy from '../images/udemy.png';
import Ebay from '../images/ebay.jpg';
import MakemyTrip from '../images/MakeMyTrip_Logo.png';
import AJio from '../images/ajio.jpg';
import MacD from '../images/macD.jpg';
import Lenskart from '../images/lenskart.png';

const Categories = () => {
    return (
        <>
        <Hero  hero = "selectCategoryImg">
            <Banner title="our offers">
              <Link to="/" className="btn-primary">return home</Link>
            </Banner>
        </Hero>

        <div className="container" style={{marginTop:'30px', marginBottom:'30px'}}>
        <div className="row">
            <div className="col col-md-3">
                 <div className="card" style={{width:'18rem' }}>
                    <img src={Udemy} className="card-img-top" alt="..."/>
                       <div className="card-body">
                           <p className="card-text">Free online courses like Angular, ReactJs, Java, Database</p>
                           <p className="card-text text-success text-uppercase font-weight-bolder">UP TO 80% OFF</p>
                       </div>
                  </div>
            </div>
            <div className="col col-md-3">
                 <div className="card" style={{width:'18rem' }}>
                    <img src={Colorbar} className="card-img-top" alt="..." style={{height:'286px'}}/>
                       <div className="card-body">
                           <p className="card-text">Wholesale Suppliers & Factory Price Contact Directly.</p>
                           <p className="card-text text-success text-uppercase font-weight-bolder">UP TO 80% OFF</p>
                       </div>
                  </div>
            </div>
            <div className="col col-md-3">
                <div className="card"style={{width:'18rem' }}>
                    <img src={MyntraLogo} className="card-img-top" alt="..."/>
                       <div className="card-body">
                           <p className="card-text">Top Deals at Factory Price.Confidently Place Orders</p>
                           <p className="card-text text-success text-uppercase font-weight-bolder">UP TO 80% OFF</p>
                       </div>
                  </div>
            </div>
            <div className="col col-md-3">
                <div className="card"style={{width:'18rem' }}>
                    <img src={Ebay} className="card-img-top" alt="..."style={{height:'286px'}}/>
                       <div className="card-body">
                           <p className="card-text">Buy & sell electronics, cars, clothes & more on eBay,</p>
                           <p className="card-text text-success text-uppercase font-weight-bolder">UP TO 80% OFF</p>
                       </div>
                  </div>
            </div>
        </div>


        <div className="row" style={{marginTop:'20px'}}>
            <div className="col col-md-3">
                 <div className="card" style={{width:'18rem' }}>
                    <img src={MakemyTrip} className="card-img-top" alt="..."style={{height:'200px'}}/>
                       <div className="card-body">
                           <p className="card-text">Find best deals at MakeMyTrip for Flight Tickets, Hotels, Holiday Packages, Bus and Train / Railway Reservations for India & International travel.</p>
                           <p className="card-text text-success text-uppercase font-weight-bolder">UP TO 80% OFF</p>
                       </div>
                  </div>
            </div>
            <div className="col col-md-3">
                 <div className="card" style={{width:'18rem' }}>
                    <img src={AJio} className="card-img-top" alt="..."style={{height:'248px'}}/>
                       <div className="card-body">
                           <p className="card-text">Popular kids brands like Mini Klub, Peppermint, UCB Kids, Mothercare, etc</p>
                           <p className="card-text text-success text-uppercase font-weight-bolder">UP TO 80% OFF</p>
                       </div>
                  </div>
            </div>
            <div className="col col-md-3">
                <div className="card"style={{width:'18rem' }}>
                    <img src={MacD} className="card-img-top" alt="..."style={{height:'250px'}}/>
                       <div className="card-body">
                           <p className="card-text"> Use McDonald's India's online food delivery service and order right away!</p>
                           <p className="card-text text-success text-uppercase font-weight-bolder">UP TO 80% OFF</p>
                       </div>
                  </div>
            </div>
            <div className="col col-md-3">
                <div className="card"style={{width:'18rem' }}>
                    <img src={Lenskart} className="card-img-top" alt="..."style={{height:'275px'}}/>
                       <div className="card-body">
                           <p className="card-text">Get Lenses Online. Get Instant Quality Results at iZito Now!</p>
                           <p className="card-text text-success text-uppercase font-weight-bolder">UP TO 80% OFF</p>
                       </div>
                  </div>
            </div>
        </div>
     </div>
</>
    );
}

export default Categories;