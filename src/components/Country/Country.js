import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

const News = ({flag,name,population,region,capital,alpha3Code}) =>{
    return(
        <div className="content_item">
            <figure>
                <img loading="lazy" src={flag} alt={name} className="flag"/>
            </figure>
            <h4 className="name"> {name} </h4>
            <p>Población: {population} </p>
            <p>Región: {region} </p>
            <p>Capital: {capital} </p>
            <Link to={`/detail/${alpha3Code}`} >Ver más</Link>
        </div>
    )
}

export default News;