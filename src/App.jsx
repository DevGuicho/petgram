/* eslint-disable multiline-ternary */
import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import { GlobalStyle } from './styles/GlobalStyles'
import useUser from './hooks/useUser'
import Spinner from './components/Spinner'

const Favs = React.lazy(() => import('./pages/Favs'))
const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))
const User = React.lazy(() => import('./pages/User'))
const Login = React.lazy(() => import('./pages/Login'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const RutaProtegida = React.lazy(() => import('./hoc/RutaProtegida'))

const App = () => {
  const { isAuth } = useUser()
  return (
    <Router>
      <GlobalStyle />
      <Link to='/'>
        <Logo />
      </Link>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path='/' component={Home} />
          <RutaProtegida exact path='/favs' component={Favs} />
          <RutaProtegida exact path='/user' component={User} />
          <Route exact path='/login'>
            {isAuth ? <Redirect to='/' /> : <Login />}
          </Route>
          <Route exact path='/detail/:detailId' component={Detail} />
          <Route exact path='/pet/:categoryId' component={Home} />
          <Route path='/' component={NotFound} />
        </Switch>
      </Suspense>
      <Navbar />
    </Router>
  )
}

export default App
