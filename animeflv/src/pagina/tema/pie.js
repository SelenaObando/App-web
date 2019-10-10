import React from 'react';
import Facebookicon from './../../Imagenes/Facebookicon.png';
import twittericon from './../../Imagenes/twittericon.jpg';
import './encabezado.css';

const Pie = (props) => {

    return (
        <pie className="pie">
            <a href="https://www.facebook.com">
                <img
                src={Facebookicon} width ='100px'
                />
            </a>
            <a href="https://www.twitter.com">
                <img
                src={twittericon} width ='100px'
                />
            </a>

        </pie>    

    );
};

export default Pie;