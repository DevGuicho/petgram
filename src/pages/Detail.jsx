import React from 'react'
import { useParams } from 'react-router-dom'
import PhotoCardWithQuery from '../containers/PhotoCardWithQuery'

const Detail = () => {
  const { detailId } = useParams()
  return <PhotoCardWithQuery id={+detailId} />
}

export default Detail
