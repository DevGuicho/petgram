import { useContext } from 'react'
import UserContext from '../context/User/userContext'

const useUser = () => {
  const userContext = useContext(UserContext)
  const { isAuth, activateAuth } = userContext

  return { isAuth, activateAuth }
}

export default useUser
