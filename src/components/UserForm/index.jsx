import React from 'react'
import useInputValue from '../../hooks/useInputValue'
import { Form, Input, Button, Title } from './styles'
const UserForm = ({ onSubmit, title }) => {
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
        />
        <Input
          type='password'
          name='password'
          id='password'
          placeholder='password'
          onChange={handleChange}
          value={form.password}
        />
        <Button>{title}</Button>
      </Form>
    </>
  )
}

export default UserForm
