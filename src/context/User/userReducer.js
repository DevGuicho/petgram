import { AUTH, LOGOUT } from './types'

export default (state, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        isAuth: true
      }
    case LOGOUT:
      return {
        ...state,
        isAuth: false
      }
    default:
      return {
        ...state
      }
  }
}
