import React, { useReducer } from 'react'
import { AUTH } from './types'
import UserContext from './userContext'
import userReducer from './userReducer'

const UserState = ({ children }) => {
  const initialState = {
    isAuth: false
  }
  const [state, dispatch] = useReducer(userReducer, initialState)

  const activateAuth = () => {
    dispatch({ type: AUTH })
  }

  return (
    <UserContext.Provider
      value={{
        isAuth: state.isAuth,
        activateAuth
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserState
