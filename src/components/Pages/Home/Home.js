import React, { useState, useEffect } from 'react';
import './Home.css';
import PlayButton from '../../../images/play-button.png';
const images = require.context('../../../images/playBanners', true);


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
        <div className='gamesContainer'>
            <div className='row'>
                <div className='col-md-9 col-sm-12'>
                    <div className='latestGame'>
                    { playerGames.length !== 0 ? <img src={ lastGame } alt={playerGames[0].gameName} className='zoom' style={{cursor: 'pointer'}} /> : null }
                    </div>
                    <div className='playGame'>
                        <img src={PlayButton}  alt='play' />
                    </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                    <div className='bannerOne'>
                        <img src='https://ssl.gstatic.com/stadia/gamers/assets/home-featured-claim-pro-games@2x.webp' alt='Stadia promo' />
                        <div className='bannerText'>Claim Pro games every month</div>
                    </div>
                    <div className='bannerOne'>
                        <img src='https://ssl.gstatic.com/stadia/gamers/assets/home-featured-news-and-updates@2x.webp' alt='Stadia promo' />
                        <div className='bannerText'>News and updates</div>
                    </div>
                    <div className='bannerOne'>
                        <img src='https://ssl.gstatic.com/stadia/gamers/assets/home-featured-new-releases-2020-12@2x.webp' alt='Stadia promo' />
                        <div className='bannerText'>New releases</div>
                    </div>
                </div>
            </div>  
            { playerGames.length > 1 ? 
                <div className='library'>
                    <h1>Your library</h1>
                    <div className='row'>
                        { playerGames.map((game, index)=> {
                            if(index !== 0){
                                let img = images('./' + game.gameBannerPlay);
                                let gameImage = img.default; 
                                return <div className='col-md-4 col-sm-12' key={index}>
                                    <div className='bannerGame'>
                                        <img src={ gameImage } alt={game.gameName} height='300px' className='zoom' />
                                        <div className='bannerText'>{game.gameName}</div>
                                    </div>
                                </div>
                            }
                        })}
                    </div>
                </div> 
            : null} 
        </div>
    )
}

export default Home;