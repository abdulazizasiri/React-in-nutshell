import React from 'react'
import PropTypes from 'prop-types'

 const Button = ({text, color}) => {
     function onClick (e)  {
         console.log(e)

     }
    return <button onClick={onClick} style={{backgroundColor:color}}className="btn"> {text}</button>
}




Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes  = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string  // Cuz we have a default, no need to make a required field. 

}

export default Button;