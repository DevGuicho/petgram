import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import UserState from './context/User/userState'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  from,
  HttpLink
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    })
  }
  return forward(operation)
})
const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
    window.location = '/user'
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: 'https://petgram-server-devguicho.vercel.app/graphql'
    })
  ])
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <UserState>
      <App />
    </UserState>
  </ApolloProvider>,
  document.getElementById('app')
)
