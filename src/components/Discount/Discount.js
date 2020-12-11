import React from 'react';
import './Discount.css';
import LabelImage from '../../images/label.png';

const Discount = (props)=> {
    return(
        <div className='row discount'>
            <div className='col-2 col-sm-2 col-md-2'>
                <img src={LabelImage} alt='discount' className='icon' />
            </div>
            <div className='col-6 col-sm-6 col-md-6 message'>
            You have €10 off your next game purchase
            </div>
            <div className='col-4 col-sm-4 col-md-4 terms'>
            Terms apply
            </div>
        </div>
    );
}

export default Discount;
