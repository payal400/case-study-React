import React from 'react';
import  './App.css';

import Home from './pages/Home';
import Categories from './pages/Categories';
import News from './pages/News';
import AboutUs from './pages/AboutUs';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import {Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
 
function App(){
 return (
 <> 
 <Navbar />
 <Switch>
   <Route exact path="/" component={Home} />
   <Route exact path="/categories/" component={Categories} />
   <Route exact path="/news/" component={News} />
   <Route exact path="/about/" component={AboutUs} />
   <Route exact path="/SignIn/"  component={SignIn}/>
   {/* <Route exact path="/SignUp/"  component={SignUp}/> */}
   <Route  component={Error} />
 </Switch>
 <Footer />
 </>
 );
}


export default App ;
