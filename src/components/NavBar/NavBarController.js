import React from 'react';
import LogoImage from '../../images/stadia_logo_white.png'

const NavBarController = (props)=> {

    const style = {
        marginRight: '30px',
        cursor: 'pointer'
    }

    const openModal = (e)=> {
        // fill the icon when opened #FF773D
        props.openModalRequest(e)
    }

    return(
        <div>
            <svg onClick={ openModal } style={ style } width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path id='controller' fillRule="evenodd" clipRule="evenodd" d="M20.49 7.63a40.92 40.92 0 0 1 1.98 8.28 2.15 2.15 0 0 1-1.86 2.53c-.97.1-2.15-.28-2.72-1.75-.1-.23-.17-.45-.25-.66-.43-1.18-.76-2.08-1.8-2.08h-7.7c-1.03 0-1.37.9-1.8 2.08l-.24.66c-.58 1.49-1.75 1.85-2.73 1.75a2.14 2.14 0 0 1-1.84-2.53c.41-3.03 1.25-6.3 1.98-8.28.73-1.98 2.67-2.38 4.48-2.38H16c1.82 0 3.75.4 4.48 2.38zm-11.2 1.3h-.97v-.96c0-.4-.34-.75-.75-.75-.4 0-.75.34-.75.75v.96h-.96c-.4 0-.75.34-.75.75 0 .4.34.75.75.75h.96v.96c0 .4.34.75.75.75.4 0 .75-.34.75-.75v-.96h.96c.4 0 .75-.34.75-.75 0-.4-.32-.75-.75-.75zm7.96-.9a.82.82 0 1 1-1.64 0 .82.82 0 0 1 1.64 0zm-2.46 2.47a.82.82 0 1 0 0-1.64.82.82 0 0 0 0 1.64zm3.28 0a.82.82 0 1 0 0-1.64.82.82 0 0 0 0 1.64zm-1.64 1.64a.82.82 0 1 0 0-1.64.82.82 0 0 0 0 1.64z" fill="#E8EAED"></path></svg>
        </div>
    )
}

export default NavBarController;