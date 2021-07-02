import React from 'react'
import { Link } from 'react-router-dom'
import useInputValue from '../../hooks/useInputValue'
import { Form, Input, Title, Error } from './styles'
import SubmitButton from '../SubmitButton'

const UserForm = ({ onSubmit, title, error, disable, isRegister }) => {
  const initialValue = {
    email: '',
    password: ''
  }
  const [form, handleChange] = useInputValue(initialValue)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }
  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type='email'
          name='email'
          id='email'
          placeholder='email'
          onChange={handleChange}
          value={form.email}
          disabled={disable}
        />
        <Input
          type='password'
          name='password'
          id='password'
          placeholder='password'
          onChange={handleChange}
          value={form.password}
          disabled={disable}
        />
        <SubmitButton disabled={disable}>{title}</SubmitButton>
      </Form>
      {isRegister && (
        <>
          <p>Ya tienes una cuenta ?</p>
          <Link to='/login'>Inicia Sesión</Link>
        </>
      )}
      {error && <Error>{error}</Error>}
    </>
  )
}

export default UserForm
