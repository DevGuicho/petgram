import { AUTH } from './types'

export default (state, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        isAuth: true
      }
    default:
      return {
        ...state
      }
  }
}
