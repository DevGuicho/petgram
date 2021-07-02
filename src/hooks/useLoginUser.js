import { gql, useMutation } from '@apollo/client'

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`

const useLoginUser = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN)

  return { login, data, loading, error }
}

export default useLoginUser
