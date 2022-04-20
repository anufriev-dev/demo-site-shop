import { useState } from 'react'
import classNames from 'classnames'
import './Nav.scss'

import {BgAbs} from '../BgAbs/BgAbs.jsx'

function Nav () {


  const [getClass,setClass] = useState(null)
  const [getEffect, setEffect] = useState(null)

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

  listItem?.forEach(el => {
    el.addEventListener('click', () => {
      setClass()
      setEffect()
      document.querySelector('.BgAbs__MenuShadow').classList.remove('BgAbs__MenuShadow_rm')
      document.querySelector('body').classList.remove('body__hidden')
    })
  },[])

  const slasses = classNames('nav', getClass)
  const classesBurger = classNames('burger',getEffect )
  
  return (
    <>
  <div className="wrapNav">
    <nav className={slasses} >
      <ul className="nav__list">
        <li className="nav__item"><a href="#" className="nav__link">HOME</a></li>
        <li className="nav__item nav__item--dash">|</li>
        <li className="nav__item"><a href="#" className="nav__link">SALE</a></li>
        <li className="nav__item nav__item--dash">|</li>
        <li className="nav__item"><a href="#" className="nav__link">HANDBAGS</a></li>
        <li className="nav__item nav__item--dash">|</li>
        <li className="nav__item"><a href="#" className="nav__link">WALLETS</a></li>
        <li className="nav__item nav__item--dash">|</li>
        <li className="nav__item"><a href="#" className="nav__link">ACCESSORIES</a></li>
        <li className="nav__item nav__item--dash">|</li>
        <li className="nav__item"><a href="#" className="nav__link">MENTS STORE</a></li>
        <li className="nav__item nav__item--dash">|</li>
        <li className="nav__item"><a href="#" className="nav__link">SHOES</a></li>
        <li className="nav__item nav__item--dash">|</li>
        <li className="nav__item"><a href="#" className="nav__link">VINTAGE</a></li>
        <li className="nav__item nav__item--dash">|</li>
        <li className="nav__item"><a href="#" className="nav__link">SERVICES</a></li>
        <li className="nav__item nav__item--dash">|</li>
        <li className="nav__item"><a href="#" className="nav__link">CONTACT US</a></li>
      </ul>
    </nav>
    <div className="block2"><span className="basket2">$300</span></div>
    <button onClick={allFuncNav}className={classesBurger}>
      <span className="burger__item"></span>
    </button>

  </div>
      <div>
          <BgAbs className="BgAbs__MenuShadow" />
      </div>
      </>
  )
}
export {Nav}