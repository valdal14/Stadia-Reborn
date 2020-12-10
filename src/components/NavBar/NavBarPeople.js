import React from 'react';

const NavBarPeople = (props)=> {

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
            <svg onClick={ openModal } style={ style } width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path id='people' fillRule="evenodd" clipRule="evenodd" d="M16.09 12.99c1.2.81 2.04 1.91 2.04 3.38V19h3.5v-2.63c0-1.9-3.13-3.03-5.54-3.38z" fill="#E8EAED"></path><path d="M9.38 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" fill="#E8EAED"></path><path fillRule="evenodd" clipRule="evenodd" d="M14.63 12a3.5 3.5 0 1 0-1.17-6.79 5.23 5.23 0 0 1 0 6.58c.37.12.75.21 1.17.21zM9.38 12.88c-2.34 0-7 1.17-7 3.5V19h14v-2.63c0-2.32-4.67-3.5-7-3.5z" fill="#E8EAED"></path></svg>
        </div>
    )
}

export default NavBarPeople;