import React from 'react';
import './Store.css';
import Discount from '../Discount/Discount';

const Store = (props)=>{
    return(
        <div className='container'>
            <h1>Store</h1>
            <Discount />
        </div>
    )
}

export default Store;