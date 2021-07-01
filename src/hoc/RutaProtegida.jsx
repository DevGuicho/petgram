/* eslint-disable multiline-ternary */
import React from 'react'
import { Route } from 'react-router-dom'
import useUser from '../hooks/useUser'
import NotRegisterUser from '../pages/NotRegisterUser'

const RutaProtegida = ({ component: Component, ...rest }) => {
  const { isAuth } = useUser()
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return isAuth ? (
          <Component {...routeProps} />
        ) : (
          <NotRegisterUser {...routeProps} />
        )
      }}
    />
  )
}

export default RutaProtegida
