import React, { useEffect, useRef, useState } from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import { ImgWrapper, Img, Button, Article } from './styles'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

const PhotoCard = ({ id, src = DEFAULT_IMAGE, likes = 0 }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          console.log('si')
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size='32px' /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}

export default PhotoCard
