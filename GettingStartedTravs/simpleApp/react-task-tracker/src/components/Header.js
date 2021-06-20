import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

 const Header = ({title, man, onAdd}) => { // Destructuring 

    return (
        <header className="header"> 
            <h1> {title} </h1>
            <Button onToggle={onAdd} color="green" text="Add"/>
        </header>
    )
}

// This will not render if there was a prop passed to the component. 
// In other words, it wil;l be overwritten if we pass title


Header.defaultProps = {
    "title" : " Hello defaulty",
    "man": "wat man"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}


// Creating a style object. 


// const headerStyle = {
//     color : 'red', 
//     backgroundColor: 'black'
// }
export default  Header;

