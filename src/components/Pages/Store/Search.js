import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import './Search.css';

const Search = (props)=>{

    const searchGame = async (e)=>{

        const endpoint = process.env.REACT_APP_DEV + '/searchgames';

        const game = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                endpoint: 'searchgames',
                gameTitle: e.target.value
            }),
        }).then(response =>{
            return response.json();
        }).then(data => {
            if(data.response){
                return data.response;
            }
        }).catch(error => {
            return error;
        });

        if(game === undefined){
            props.searchedGame(game, 'Invalid request')
        } else {
            props.searchedGame(game, e.target.value);
        }        
    };

    return(
        <div className='searchGames'>
            <Form>
                <FormControl type="text" placeholder="Search for Stadia Games" className="mr-sm-12 mr-md-12" onChange={searchGame} />
            </Form>
        </div>
        
    )
}

export default Search;