import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import { ImgWrapper, Img, Button } from './styles'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

const PhotoCard = ({ id, src = DEFAULT_IMAGE, likes = 0 }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size='32px' /> {likes} likes!
      </Button>
    </article>
  )
}

export default PhotoCard
