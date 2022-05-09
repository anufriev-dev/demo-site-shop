import React from 'react'
import { useState,useEffect } from 'react'
import {useSelector} from 'react-redux'
import classNames from 'classnames'

import { Link } from 'react-router-dom'

function Nav () {


  const [getClass,setClass] = useState(null)
  const [getEffect, setEffect] = useState(null)
  const {basket} = useSelector(state => state.basket)

  const hendelTog = () => getClass === 'nav--visible' ? setClass(null) : setClass('nav--visible')
  const hendelEfect = () => getEffect === 'burger--active' ? setEffect(null) : setEffect('burger--active')

  function allFuncNav () {
    const height = document.querySelector('.header').getBoundingClientRect().height
      document.querySelector(':root').style.setProperty('--nav-height', `${height}px`)
      hendelTog()
      hendelEfect()
      document.querySelector('.BgAbs__MenuShadow').classList.toggle('BgAbs__MenuShadow_rm')
      document.querySelector('body').classList.toggle('body__hidden')
  }

  const nav = document.querySelector('.nav')
  const listItem = nav?.querySelectorAll('a')

  function eventClicl () {
      setClass()
      setEffect()
      document.querySelector('.BgAbs__MenuShadow').classList.remove('BgAbs__MenuShadow_rm')
      document.querySelector('body').classList.remove('body__hidden')
  }

  useEffect(() => {
    listItem?.forEach(el => {
      el.addEventListener('click', eventClicl)
    } )
    return function () {
      listItem?.forEach(el => {
        el.removeEventListener('click', eventClicl)
      }
    )}
  })


  const classesBurger = classNames('burger',getEffect )
  
  return (
    <>
  <div className="wrapNav">

    <Link to="/basket"><div className="block2"><span className="basket2">{basket}$</span></div> </Link> 
    <button onClick={allFuncNav}className={classesBurger}>
      <span ></span>
    </button>

  </div>
      </>
  )
}
export {Nav}