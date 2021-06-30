import { gql, useMutation } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom'

import useLocalStorage from '../../hooks/useLocalStorage'
import useNearScreen from '../../hooks/useNearScreen'
import FavButton from '../FavButton'
import { ImgWrapper, Img, Article } from './styles'

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

const PhotoCard = ({ id, src = DEFAULT_IMAGE, likes = 0 }) => {
  const key = `like-${id}`
  const [addLike] = useMutation(LIKE_PHOTO)
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()

  const handleFavClick = () => {
    !liked &&
      addLike({
        variables: {
          input: { id }
        }
      })
    setLiked(!liked)
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
