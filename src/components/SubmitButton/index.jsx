import React from 'react'
import { Button } from './styles'

const SubmitButton = ({ children, onClick, disabled }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  )
}

export default SubmitButton
