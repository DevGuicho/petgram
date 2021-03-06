import React from 'react'
import UserForm from '../components/UserForm'
import useUser from '../hooks/useUser'
import useRegisterUser from '../hooks/useRegisterUser'

const NotRegisterUser = () => {
  const { register, loading, error } = useRegisterUser()
  const { activateAuth } = useUser()

  const errorMessage = error && 'Hay un error'
  const handleSubmit = (values) => {
    register({
      variables: {
        input: values
      }
    })
      .then(({ data }) => {
        window.sessionStorage.setItem('token', data.signup)
        activateAuth()
        activateAuth(values)
      })
      .catch((error) => console.log(error))
  }

  return (
    <UserForm
      onSubmit={handleSubmit}
      title='Registrarse'
      disable={loading}
      error={errorMessage}
      isRegister
    />
  )
}

export default NotRegisterUser
