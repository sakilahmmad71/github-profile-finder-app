import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const Navbar = (props) => {
        const { icon,title } = props

        // markup goes there...
        return(
            <div className="navbar bg-primary">
                <h1><i className={icon}></i> {title}</h1>
                <ul>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/about' >About</Link></li>
                </ul>
            </div>
        )
}

Navbar.defaultProps = {
    title : 'Github Finder',
    icon : 'fa fa-github'
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired
}


export default Navbar
