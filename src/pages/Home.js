import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import Cards from '../components/Cards';
import Cards1 from '../components/Cards1';
import Cards2 from '../components/Cards2';
import Footer from '../components/Footer';
import SignIn from './SignIn';
import SignUp from '../components/SignUp';

const Home = () => {
 return(
     <>
     <Hero> 
         <Banner title="Buy Here" subtitle="more offers up to 50%off">
             <Link to="/categories" className="btn-primary">
                 Our Offers
             </Link>
         </Banner>
     </Hero>
     <Cards />
     <Cards1 />
     <Cards2 />
     <Services />
     </>
 );
}

export default Home;