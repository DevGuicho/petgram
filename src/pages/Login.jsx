import React from 'react'
import { useHistory } from 'react-router-dom'
import UserForm from '../components/UserForm'
import useLoginUser from '../hooks/useLoginUser'
import useUser from '../hooks/useUser'

const Login = () => {
  const { login, loading, error } = useLoginUser()
  const { activateAuth } = useUser()
  const history = useHistory()
  const errorMessage = error && 'Hay un error'
  const handleSubmit = (values) => {
    login({
      variables: {
        input: values
      }
    })
      .then(({ data }) => {
        window.sessionStorage.setItem('token', data.login)
        activateAuth()
        history.goBack()
      })
      .catch((error) => console.log(error))
  }

  return (
    <UserForm
      onSubmit={handleSubmit}
      title='Iniciar Sesion'
      disable={loading}
      error={errorMessage}
    />
  )
}

export default Login
