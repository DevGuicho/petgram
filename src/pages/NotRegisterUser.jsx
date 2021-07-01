import React from 'react'
import UserForm from '../components/UserForm'
import useUser from '../hooks/useUser'

const NotRegisterUser = () => {
  const { activateAuth } = useUser()
  const handleSubmit = (values) => {
    console.log(values)
    activateAuth()
  }
  return <UserForm onSubmit={handleSubmit} title='Registrarse' />
}

export default NotRegisterUser
