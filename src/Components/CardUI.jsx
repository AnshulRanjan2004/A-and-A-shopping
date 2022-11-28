import React from "react";
import "./Cards.css"

const Card = props=>{
    return(
        <div className='card text-center shadow'>
            <div className='overflow'>

                <a href="C:\Users\anves\OneDrive\Documents\GitHub\A-and-A-shopping\src\Components\3D_models\acc1.html" target="_blank" rel="noreferrer">
                <img src={props.img} alt='Fashion' />
                </a>
            </div>
        
            <div className='card-body text-dark'>
                <h4 className='card-title'>{props.title}</h4>
                <p className='card-text text-secondary'>
                    Part of our latest collection - Meraki
                </p>
                <a href='/cart' className='btn btn-outline-success'>Add To Cart</a>
                <a href='/cart' className='btn btn-outline-success'>Buy Now</a>
                <a href={props.model} className='btn btn-outline-success'>View in 3D</a>
            </div>
        </div>
        
    );
}

export default Card;