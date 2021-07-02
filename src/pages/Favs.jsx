import { gql, useQuery } from '@apollo/client'
import React from 'react'
import ListOfFavs from '../components/ListOfFavs'
import Spinner from '../components/Spinner'
import Layout from '../components/Layout'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const Favs = () => {
  const { data, loading, error } = useQuery(GET_FAVS, {
    fetchPolicy: 'network-only'
  })

  if (loading) return <Spinner />
  if (error) return <h1>Ha habido un error</h1>
  return (
    <Layout
      title='Tus Favoritos'
      subtitle='Aqui puedes encontrar tus favoritos'
    >
      <ListOfFavs favs={data.favs} />
    </Layout>
  )
}

export default Favs
