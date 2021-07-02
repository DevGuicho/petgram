import { gql, useMutation } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom'

import useNearScreen from '../../hooks/useNearScreen'
import FavButton from '../FavButton'
import { ImgWrapper, Img, Article } from './styles'

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

const PhotoCard = ({ id, liked, src = DEFAULT_IMAGE, likes = 0 }) => {
  const [addLike] = useMutation(LIKE_PHOTO)

  const [show, element] = useNearScreen()

  const handleFavClick = () => {
    addLike({
      variables: {
        input: { id }
      }
    })
  }
  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  )
}

export default PhotoCard
