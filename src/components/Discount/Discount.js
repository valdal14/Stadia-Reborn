import React from 'react';
import './Discount.css';
import LabelImage from '../../images/label.png';

const Discount = (props)=> {
    return(
        <div className='row discount'>
            <div className='col-2 col-sm-2 col-md-2'>
                <img src={LabelImage} alt='discount' className='icon' />
            </div>
            <div className='col-8 col-sm-8 col-md-8 message'>
            You have €10 off your next game purchase
            </div>
            <div className='col-2 col-sm-2 col-md-2 terms'>
            Terms apply
            </div>
        </div>
    );
}

export default Discount;
