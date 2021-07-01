import { useState } from 'react'

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  return [value, handleChange]
}

export default useInputValue
