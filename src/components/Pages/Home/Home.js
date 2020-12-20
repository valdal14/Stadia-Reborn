import React, { useState, useEffect } from 'react';
import './Home.css';
const images = require.context('../../../images/playBanners', true);
// let picProfile = images('./' + props.loggedUser.userPicture);

const Home = (props)=>{

    const [playerGames, setPlayerGames] = useState([]);
    let user = props.loggedUser;
    // save to local storage
    localStorage.setItem('StadiaUser', JSON.stringify(user));
    let lastGame = null;

    const getGames = async ()=>{

        const endpoint = process.env.REACT_APP_DEV + '/ownedgames';
        
        const games = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: user.username
            }),
            }).then(response => {
                return response.json();
            }).then(data =>{
                return data.response;
            }).catch(error => {
                console.log(error);
                return;
            });

        if(games){       
            console.log(games)   
            setPlayerGames(games);
        } else {
            console.log('WHAT???')
        }
    }
    
    useEffect(() => {
        console.log('home pages loaded')
        if(playerGames.length === 0) {
            getGames();
        }
    });

    if(playerGames.length !== 0 ){
        const gameBanner = images('./' + playerGames[0].gameBannerPlay);
        lastGame = gameBanner.default;
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-10 col-sm-12'>
                    { playerGames.length !== 0 ? <img src={ lastGame } alt={playerGames[0].gameName} /> : null }
                </div>
                <div className='col-md-2 col-sm-12'>

                </div>
            </div>   
        </div>
    )
}

export default Home;