/* eslint-disable multiline-ternary */
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Logo from './components/Logo'
import PhotoCardWithQuery from './containers/PhotoCardWithQuery'
import Home from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyles'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Link to='/'>
        <Logo />
      </Link>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/detail/:petId' component={PhotoCardWithQuery} />
        <Route exact path='/pet/:categoryId' component={Home} />
      </Switch>
    </Router>
  )
}

export default App
