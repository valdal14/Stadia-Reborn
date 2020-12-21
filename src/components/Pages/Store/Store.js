import React, { useState, useEffect } from 'react';
import './Store.css';
import Discount from '../../Discount/Discount';
import Search from './Search';
import { Card, Button, Badge } from 'react-bootstrap';
const images = require.context('../../../images/playBanners', true);

const Store = (props)=>{

    let user = props.loggedUser;
    const [allGames, setAllGames] = useState([]);

    const getGames = async ()=>{

        const endpoint = process.env.REACT_APP_DEV + '/games';
        
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
            setAllGames(games);
        }
    }
    
    useEffect(() => {
        if(allGames.length === 0) {
            getGames();
        }
    });

    const trimDesc = (str)=> {
        let desc = '';

        if(str.length >= 94){
            for(let i = 0; i < str.length; i++){
                desc += str[i];
                if(i >= 93){
                    desc += '...';
                    break;
                }
            }
            return desc;
        } else {
            return str;
        }
    }

    return(
        <div className='container'>
            { props.loggedUser.promo === 1 ? <Discount /> : null }
            <Search />
            <div className='row'>
            { allGames.length > 0 ? 
               allGames.map((game, index) => {
                let img = images('./' + game.gameBannerPlay);
                let gameImage = img.default; 
                return <div className='col-md-4 col-sm-12 cards' key={index}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={gameImage} width='100px' height='180px' />
                    <Card.Body>
                        <Card.Title>{game.gameName}</Card.Title>
                        <Card.Subtitle>
                            <Badge variant="warning">{game.genre}</Badge> 
                        </Card.Subtitle>
                        <Card.Text>
                        {trimDesc(game.gameDescription)}
                        </Card.Text>
                        { game.username !== user.username ? <Button variant="warning">Euro {game.gamePrice}</Button> : null }
                        <Card.Title>
                            {/* { game.username === user.username ? <Badge variant="success">Purchased</Badge> : null } */}
                            { game.username === user.username ? <Button variant="success" disabled>Purchased</Button> : null }
                        </Card.Title>
                        
                    </Card.Body>
                    </Card>
                </div>
               })
            : null}
            </div>
        </div>
    )
}

export default Store;