import React, { useState, useEffect } from 'react'
import Category from '../Category'
import { List, Item } from './styles'

const ListOfCategoriesComponent = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)
  useEffect(() => {
    window
      .fetch('https://petgram-server-devguicho.vercel.app/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response)
      })
  }, [])

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed && 'fixed'}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} path={`/pet/${category.id}`} />
        </Item>
      ))}
    </List>
  )
  return (
    <>
      {renderList()} {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
