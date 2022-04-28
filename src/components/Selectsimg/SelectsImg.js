import React from 'react';
import './SelectsImgStyle.css'



const SelectsImg = ({bgImg, text}) => {
    return ( <div className='selects-location'>
        <img src={bgImg} alt='/' />
        <div className="overlay"></div>
        <p>{text}</p>
    </div> );
}
 
export default SelectsImg;