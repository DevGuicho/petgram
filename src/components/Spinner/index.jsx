/* eslint-disable react/self-closing-comp */
import React from 'react'
import './styles.css'

const Spinner = () => {
  return (
    <section className='Spinner'>
      <div className='lds-roller'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}

export default Spinner
