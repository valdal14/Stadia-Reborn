import React from 'react';
import './Banner.css';
import HeroBannerImage from '../../../images/pro_hero_h_2x.png';
import { Button } from 'react-bootstrap';

const Banner = (props)=> {
    return(
        <div className='container'>
            <div className='jumbotron'>
                <div className='row'>
                    <div className='col-md-8 col-sm-12'>
                        <div>
                            <h1>Play on us</h1>
                            <p>Get instant access to a collection of games with a 1 month Stadia Pro trial</p>
                            <div>
                            <Button variant="outline-success" className='buttonNav' onClick={props.changeModalState}>Try Stadia</Button>
                            </div> <br />
                            <p>€9.99/mo after trial, cancel anytime</p>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                        <img src={HeroBannerImage} alt='Stadia Games' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;