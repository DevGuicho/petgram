import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import UserState from './context/User/userState'

const client = new ApolloClient({
  uri: 'https://petgram-server-devguicho.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <UserState>
      <App />
    </UserState>
  </ApolloProvider>,
  document.getElementById('app')
)
