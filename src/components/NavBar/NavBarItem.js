import React from 'react';

const NavBarItem = (props)=> {
    
    const style = {
        marginRight: '30px',
        cursor: 'pointer'
    };

    return(
        <div style={style}>
            { props.svgImage }
        </div>
    );
}

export default NavBarItem;