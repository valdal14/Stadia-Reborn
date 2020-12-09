import React from 'react';

const NavBarContact = (props)=> {

    const style = {
        marginRight: '30px',
        cursor: 'pointer'
    };

    const openModal = ()=> {
        // fill the icon when opened #FF773D
        console.log(props.openModal)
    }

    return(
        <div onClick={ openModal }>
            <svg style={ style } width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.333 4.667H4.667A1.83 1.83 0 002.843 6.5l-.01 11c0 1.008.825 1.833 1.834 1.833h14.666a1.839 1.839 0 001.834-1.833v-11a1.839 1.839 0 00-1.834-1.833zm0 3.666L12 12.917 4.667 8.333V6.5L12 11.083 19.333 6.5v1.833z" fill="#E8EAED"></path></svg>
        </div>
    )
}

export default NavBarContact;