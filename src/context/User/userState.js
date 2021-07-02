import React, { useReducer, useState } from 'react'
import { AUTH, LOGOUT } from './types'
import UserContext from './userContext'
import userReducer from './userReducer'

const UserState = ({ children }) => {
  const [isAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })
  const initialState = {
    isAuth
  }

  const [state, dispatch] = useReducer(userReducer, initialState)

  const activateAuth = (values) => {
    dispatch({ type: AUTH })
  }
  const removeAuth = () => {
    dispatch({ type: LOGOUT })
    window.sessionStorage.removeItem('token')
  }

  return (
    <UserContext.Provider
      value={{
        isAuth: state.isAuth,
        activateAuth,
        removeAuth
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserState
