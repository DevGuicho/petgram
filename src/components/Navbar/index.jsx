import React from 'react'
import { Nav, Link } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE = '32px'

const Navbar = () => {
  return (
    <Nav>
      <Link to='/' exact activeClassName='selected'>
        <MdHome size={SIZE} />
      </Link>
      <Link to='/favs' exact activeClassName='selected'>
        <MdFavoriteBorder size={SIZE} />
      </Link>
      <Link to='/user' exact activeClassName='selected'>
        <MdPersonOutline size={SIZE} />
      </Link>
    </Nav>
  )
}

export default Navbar
