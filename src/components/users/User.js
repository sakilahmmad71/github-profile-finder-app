import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Repos } from '../repos'
import { Spinner } from '../layouts'


const User = (props) => {

    useEffect(() => {
        props.getUser(props.match.params.login)
        props.getUserRepos(props.match.params.login)
        // eslint-disable-next-line
    }, [])
    
        const {
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = props.user

         const { loading, repos } = props

         if(loading) return <Spinner />

        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>Back To Search</Link>
                Hireable : {' '}
                {hireable ? <i className="fa fa-check text-success" /> : <i className="fa fa-times-circle text-danger" />}
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" style={{ width : '150px' }} alt="profile"/>
                        <h1>{name}</h1>
                        <p>Location : {location}</p>
                    </div>
                    <div className="">
                        {bio && <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>}
                        <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                        <ul>
                            <li>
                                {login && <Fragment>
                                    <strong>Usernsme : </strong> {login}
                                </Fragment>}
                            </li>

                            <li>
                                {company && <Fragment>
                                    <strong>Company : </strong> {company}
                                </Fragment>}
                            </li>

                            <li>
                                {blog && <Fragment>
                                    <strong>Website : </strong> {blog}
                                </Fragment>}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followers : {followers}</div>
                    <div className="badge badge-success">Following : {following}</div>
                    <div className="badge badge-light">Public Repos : {public_repos}</div>
                    <div className="badge badge-dark">Publi Gists : {public_gists}</div>
                </div>
                <Repos repos={repos} />
            </Fragment>
        )
}

User.propTypes = {
    loading : PropTypes.bool,
    user : PropTypes.object.isRequired,
    repos : PropTypes.array.isRequired,
    getUser : PropTypes.func.isRequired,
    getUserRepos : PropTypes.func.isRequired
}

export default User