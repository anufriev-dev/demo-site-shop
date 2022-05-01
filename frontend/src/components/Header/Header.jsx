import './Header.scss'

import React,{useEffect} from 'react'
import Registry from '../Registry/Registry'
import {useSelector,useDispatch} from 'react-redux'
import {Nav} from '../Nav/Nav'
import { BgAbs } from '../BgAbs/BgAbs'
import Logo from '../../img/logo.png'
import {Link} from 'react-router-dom'

function Header () {


  const {basket} = useSelector(state => state.basket)

  return (
    <>
    <header className="header">
      <div className="containerMy">
        <div className="header-container">
          <a href="">
            <img src={Logo} alt="image" className="logoHeader"/>
          </a>
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