import React, { Fragment, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import { Navbar, Footer, Alert } from './components/layouts'
import { Users, Search, User } from './components/users'
import { About } from './components/pages'

import "./App.css";

const App = () => {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  // search github users
  const searchUsers = async (text) => {
    setLoading(true)

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_GITHUB_CLIENT_SECRET}`)

    setUsers(res.data.items)
    setLoading(false)
  }

  // Get a single user
  const getUser = async (username) => {
    setLoading(true)

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_GITHUB_CLIENT_SECRET}`)

    setUser(res.data)
    setLoading(false)
  }

  // Get users public repos
  const getUserRepos = async (username) => {
    setLoading(true)

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_GITHUB_CLIENT_SECRET}`)

    setRepos(res.data)
    setLoading(false)
  }

  const clearUsers = () => {
    setUsers([])
    setLoading(false)
  }

  const showAlert = (msg, type) => {
    setAlert({msg, type})

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  

    return (
      <Router>
        <div className="App" id="content-wrap">
          <header className="App-header">
            <Navbar title="Github Finder" icon="fa fa-github" />
            <div className="container">
              <Alert alert={alert}/>

              <Switch>
                <Route exact path='/' render={props => (
                  <Fragment>
                    <Search searchUsers={searchUsers} 
                      clearUsers={clearUsers} 
                      showClear={users.length > 0 ? true : false} 
                      setAlert={showAlert}
                    />
                    <Users loading={ loading } users={ users } />
                  </Fragment>
                )} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' render={props => (
                  <User {...props } getUserRepos={getUserRepos} getUser={getUser} repos={repos}user={user} />)} />
              </Switch>
              
            </div>
            <Footer />
          </header>
        </div>
      </Router>
    )
}

export default App;
