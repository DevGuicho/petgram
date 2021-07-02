import { useContext } from 'react'
import UserContext from '../context/User/userContext'

const useUser = () => {
  const userContext = useContext(UserContext)
  const { isAuth, activateAuth, removeAuth } = userContext

  return { isAuth, activateAuth, removeAuth }
}

export default useUser
