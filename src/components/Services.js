import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

class Services extends Component {
    state = {
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktail",
                info:'FaAppStoreIos FaAppStoreI FaAppStoreIos FaAppStoreI FaAppStoreIos FaAppStoreI bnjjkkkk'
            },
            {
                icon:<FaHiking/>,
                title:"fahiking",
                info:'FaAppStoreIos FaAppStoreI FaAppStoreIos FaAppStoreI FaAppStoreIos FaAppStoreI hjkk'
            },
            {
                icon:<FaShuttleVan/>,
                title:"free FaShuttleVan",
                info:'FaAppStoreIos FaAppStoreI FaAppStoreIos FaAppStoreI FaAppStoreIos FaAppStoreI jkkkllll'
            },
            {
                icon:<FaBeer/>,
                title:"free FaBeer",
                info:'FaAppStoreIos FaAppStoreI FaAppStoreIos FaAppStoreI FaAppStoreIos FaAppStoreI jjjkkjl'
            }
        ]
    }
    render () {
        return(
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                   {this.state.services.map((item, index) => {
                     return <article  key={index} className="service">
                         <span>{item.icon}</span>
                         <h6>{item.title}</h6>
                         <p>{item.info}</p>
                     </article>
                   })}
                </div>
             </section>
         );
    }
}

export default Services;