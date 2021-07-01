import React from 'react'
import PhotoCard from '../components/PhotoCard'
import { gql, useQuery } from '@apollo/client'
import Spinner from '../components/Spinner'

const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(query, {
    variables: {
      id
    }
  })
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <Spinner />
  }

  return <PhotoCard {...data.photo} />
}

export default PhotoCardWithQuery
