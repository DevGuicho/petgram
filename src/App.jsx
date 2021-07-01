/* eslint-disable multiline-ternary */
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Logo from './components/Logo'
import Detail from './pages/Detail'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { GlobalStyle } from './styles/GlobalStyles'
import Favs from './pages/Favs'
import User from './pages/User'
import RutaProtegida from './hoc/RutaProtegida'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Link to='/'>
        <Logo />
      </Link>
      <Switch>
        <Route exact path='/' component={Home} />
        <RutaProtegida exact path='/favs' component={Favs} />
        <RutaProtegida exact path='/user' component={User} />
        <Route exact path='/detail/:detailId' component={Detail} />
        <Route exact path='/pet/:categoryId' component={Home} />
      </Switch>
      <Navbar />
    </Router>
  )
}

export default App
