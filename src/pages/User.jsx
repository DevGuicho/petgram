import React from 'react'
import useUser from '../hooks/useUser'
import SubmitButton from '../components/SubmitButton'

const User = () => {
  const { removeAuth } = useUser()
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar Sesión</SubmitButton>
    </>
  )
}

export default User
