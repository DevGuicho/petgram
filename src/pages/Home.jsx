import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfCategories } from '../components/ListOfCategories'
import ListOfPhotoCards from '../components/ListOfPhotoCards'
import Layout from '../components/Layout'

const HomePage = () => {
  const { categoryId } = useParams()
  return (
    <Layout
      title='Tua app de fotos de mascotas'
      subtitle='Con petgram puedes encontrar fotos de animales domesticos muy bonitos'
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId !== null ? +categoryId : 1} />
    </Layout>
  )
}

const Home = React.memo(HomePage, (prev, props) => {
  return prev.categoryId === props.categoryId
})

export default Home
