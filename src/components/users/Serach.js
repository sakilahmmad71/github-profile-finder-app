import React, { useState } from 'react'
import PropTypes from 'prop-types'


 const Serach = ({ searchUsers, setAlert, showClear, clearUsers }) => {

    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(text === '') {
            setAlert('Plaese enter something', 'light')
        } else {
            searchUsers(text)
            setText('')
        }
    }

        return (
            <div>
                <form className="form" onSubmit={onSubmit} >
                    <input type="text" placeholder="Search users" name="text" value={text} onChange={onChange} autoComplete="off" />
                    <input type="submit" className="btn btn-dark btn-block" value="Search" />
                </form>
                { showClear && <button className="btn btn-light btn-block" onClick={clearUsers }>Clear</button> }
            </div>
        )
}

Serach.propTypes = {
    searchUsers : PropTypes.func.isRequired,
    clearUsers : PropTypes.func.isRequired,
    showClear : PropTypes.bool.isRequired
}


export default Serach
