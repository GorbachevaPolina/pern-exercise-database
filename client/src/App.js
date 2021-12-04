import React, {Fragment, useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/LogIn';
import Register from './components/Register';
import MainPage from './components/MainPage';
import Catalog from './components/Catalog';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  }

  async function isAuth() {
    try {
      const response = await fetch(
        '/auth/is-verify', {
          method: 'GET',
          headers: {token: localStorage.token}
        }
      )

      const parseRes = await response.json();
      
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    isAuth()
  }, [])

  return (
    <Fragment>
      <Router>
        
          <Switch>
            <Route 
              exact
              path='/'
              render={props => <MainPage {...props} isAuth={isAuthenticated} setAuth={setAuth}/>}
            />
            <Route 
              exact 
              path='/log' 
              render={props => 
                !isAuthenticated ? (
                  <Login {...props} setAuth={setAuth}/>
                ) : (
                  <Redirect to='/board' /> 
                )
              }
            />
            <Route 
              exact 
              path='/reg' 
              render={props => 
                !isAuthenticated ? (
                  <Register {...props} setAuth={setAuth}/>
                ) : (
                  <Redirect to='/log' /> 
                )
              }
            />
            <Route 
              exact 
              path='/board' 
              render={props => 
                isAuthenticated ? (
                  <Dashboard {...props} isAuth={isAuth} setAuth={setAuth}/>
                ) : (
                  <Redirect to='/log' /> 
                )
              }
            />
            <Route 
              exact
              path='/cat'
              render={props => <Catalog {...props} isAuth={isAuthenticated} setAuth={setAuth}/>}
            />
          </Switch>
        
      </Router>
    </Fragment>
  );
}

export default App;
