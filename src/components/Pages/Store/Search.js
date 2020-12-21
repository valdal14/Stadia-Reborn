import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import './Search.css';

const Search = (props)=>{
    return(
        <div className='searchGames'>
            <Form>
                <FormControl type="text" placeholder="Search for Stadia Games" className="mr-sm-12 mr-md-12" />
            </Form>
        </div>
        
    )
}

export default Search;