import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';


const Detail = (props) =>{
    // console.log(props)
    console.log(props.match.params.slug);
    return(
        <Fragment>
            <h1>Detalle del producto</h1>
            <Link to="/" >Ir a productos</Link>
        </Fragment>
    )
}

export default Detail;