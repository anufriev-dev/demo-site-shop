import React from 'react'
import './styles.scss'
import {MySlideHz} from '../mySlideHz/MySlideHz.jsx'

function SectionSlideHz () {
  return (
    <div className="containerMy">
      <section className="slider-header-hz">
        <MySlideHz />
        <h2 className="slider-header-hz__title">FEATURED PRODUCTS</h2>
      </section>
    </div>
  )
}
export {SectionSlideHz}