import React from 'react'
import Category from '../Category'
import { List, Item } from './styles'

const ListOfCategories = () => {
  return (
    <List>
      {[1, 2, 3, 4].map((category) => (
        <Item key={category}>
          <Category />
        </Item>
      ))}
    </List>
  )
}

export default ListOfCategories
