import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const UserItem = (props) => {

    const { id, login, avatar_url } = props.user

    return(
        <div className="card text-center" key={id}>
            <img src={avatar_url} className="round-img" style={{ width : '60px' }} alt="Profile" />
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More...</Link>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user : PropTypes.object.isRequired
}

export default UserItem