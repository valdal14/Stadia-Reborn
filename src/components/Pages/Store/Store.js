import React from 'react';
import './Store.css';
import Discount from '../../Discount/Discount';

const Store = (props)=>{
    return(
        <div className='container'>
            { props.loggedUser.promo === 1 ? <Discount /> : null }
        </div>
    )
}

export default Store;