import React from 'react'
import PropTypes from 'prop-types'
 
 const Header = ({title}) => {
    return (
        <header> 
            <h1> {title} </h1>
 
        </header>
    )
}

// This will not render if there was a prop passed to the component. 
// In other words, it wil;l be overwritten if we pass title


// Header.defaultProps = {
//     "title" : " Hello defaulty",
//     "man":"MAn"
// }

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default  Header;

