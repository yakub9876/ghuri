import React from 'react';
import img from '../../../images/subscribe.png'
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className='subscribe d-none d-lg-block'>
            <img src={img} className="w-100" alt="" />
            <form>
                <input type="text" placeholder='Your email adderess' />
                <button className="button-primary btn">Sbuscribe</button>
            </form>
        </div>
    );
};

export default Subscribe;