import React from 'react'
import { useParams } from 'react-router-dom'
import ListOfCategories from '../components/ListOfCategories'
import ListOfPhotoCards from '../components/ListOfPhotoCards'

const Home = () => {
  const { categoryId } = useParams()
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId !== null ? +categoryId : 1} />
    </>
  )
}

export default Home
