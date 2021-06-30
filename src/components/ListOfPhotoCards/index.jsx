import React from 'react'
import useGetCategories from '../../hooks/useGetCategories'
import PhotoCard from '../PhotoCard'
import Spinner from '../Spinner'

const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetCategories({ categoryId })

  if (loading) return <Spinner />
  if (error) return <p>Error :(</p>
  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}

export default ListOfPhotoCards
