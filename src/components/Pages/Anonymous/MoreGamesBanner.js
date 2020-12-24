import React from 'react';
import './MoreGamesBanner.css';
import StadiaHardware from '../../../images/hardware_1.5x.png';

const MoreGamesBanner = ()=>{
    return(
        <div className='container'>
            <h2 className='gamesBannerText'>Get even more games</h2>
            <h3 className='discountBannerText'>Get €10 off your first game purchase in the Stadia store with Pro.</h3>
            <div className='row'>
                <div className='col-md-3 col-sm-12 gameImage'>
                    <img src='https://www.gstatic.com/stadia/gamers/landing_page/assets/games/MarvelsAvengers_1x.jpg' alt='Avengers' />
                </div>
                <div className='col-md-3 col-sm-12 gameImage'>
                    <img src='https://www.gstatic.com/stadia/gamers/landing_page/assets/games/assassinscreed_valhalla_1x.jpg' alt='ACV' />
                </div>
                <div className='col-md-3 col-sm-12 gameImage'>
                    <img src='https://www.gstatic.com/stadia/gamers/landing_page/assets/games/Cyberpunk_2077_300x400.jpg' alt='CyberPunk' />
                </div>
                <div className='col-md-3 col-sm-12 gameImage'>
                    <img src='https://www.gstatic.com/stadia/gamers/landing_page/assets/games/jedi_fallenorder_1x.jpg' alt='Jedi' />
                </div>
            </div>
            <br/>
            <br/>
            <div className='row'>
                <div className='col-md-6 col-sm-12'>
                    <h3 className='instantPlayBigText'>Play instantly across your devices</h3>
                    <p className='instantPlayText'>Play instantly with one click You choose the screens where your games live. Play on compatible laptops, desktops, phones, and tablets. It’s up to you. And to play on TVs, grab Stadia Premiere Edition, available now on the Google Store.
                    Stadia controller and Google Chromecast Ultra may not be available for purchase in your country/region. Read more. <br /><br />
                    An internet connection speed of 10 megabits per second (Mbps) or greater is the minimum recommended to use Stadia. See more tips and tricks on how to get the best gaming experience.</p>
                </div>
                <div className='col-md-6 col-sm-12'>
                    <img src='https://www.gstatic.com/stadia/gamers/landing_page/assets/play_anywhere@2x.jpg' alt='play anywhere' />
                </div>
            </div>
            <br/>
            <br/>
            <div className='row'>
                <div className='col-md-5 col-sm-12'>
                    <h3 className='instantPlayBigText'>The Stadia platform is free to join</h3>
                    <p className='instantPlayText'>You don’t need special hardware or an invitation to play, just the screens and controllers you already have. You can purchase a variety of great games on the Stadia store and play them through Wi-Fi and wired internet connections.</p>
                </div>
                <div className='col-md-7 col-sm-12'>
                    <img src={StadiaHardware} alt='Stadia' />
                </div>
            </div>
            <br/>
            <br/>
            <div className='row'>
                <div className='col-md-12 col-sm-12 footerText'>Privacy | Stadia Terms</div>
            </div>
        </div>
    )
}

export default MoreGamesBanner;