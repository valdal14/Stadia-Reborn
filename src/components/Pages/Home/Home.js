import React from 'react';
import './Home.css';

const Home = (props)=>{

    let user = props.loggedUser;
    // save to local storage
    localStorage.setItem('StadiaUser', JSON.stringify(user));

    return(
        <div className='container'>
            <h1>Home Page</h1>
        </div>
    )
}

export default Home;