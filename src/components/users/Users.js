import React from 'react'
import { UserItem } from './'
import { Spinner } from '../layouts/'
import PropTypes from 'prop-types'


const Users = ({ loading, users }) => {

    if(loading) {
        return <Spinner />
    } else {
        return(
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem id={user.id} user={user} />
                ))}
            </div>
        )
    }

}

Users.propTypes = {
    users : PropTypes.array.isRequired,
    loading : PropTypes.bool.isRequired
}

const userStyle = {
    display : 'grid',
    gridTemplateColumns : 'repeat(3, 1fr)',
    gridGap : '1rem'
}

export default Users