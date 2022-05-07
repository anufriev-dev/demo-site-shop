import './styles.scss'

import React from 'react'
import Registry from '../registry/Registry'
import {useSelector} from 'react-redux'
import {Nav} from '../nav/Nav'
import { BgAbs } from '../bgAbs/BgAbs'
import Logo from '../../img/logo.png'
import {Link} from 'react-router-dom'

function Header () {


  const {basket} = useSelector(state => state.basket)

  return (
    <>
    <header className="header">
      <div className="containerMy">
        <div className="header-container">
          <Link to="/">
            <img src={Logo} className="logoHeader"/>
          </Link>
          <div className="block"><div className="header-container__serch--content"><input className="header-container__serch" type="text" /><button className="btn-serch" type="hidden"></button> </div> </div>

          <Link to="/basket" > <div className="block"><span className="basket">{basket}$</span></div> </Link>

        </div>
        <Registry />
        <div>
          <BgAbs className="BgAbs-Header-one" background="#4ccfc1"  />
        </div>
        <Nav />

      </div>
    </header>
    </>
  )
}
export {Header}