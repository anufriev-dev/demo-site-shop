import './Header.scss'

import Registry from '../Registry/Registry'
import {Nav} from '../Nav/Nav'
import { BgAbs } from '../BgAbs/BgAbs'
import Logo from '../../img/logo.png'

function Header () {
  return (
    <>
    <header className="header">
      <div className="container">
        <div className="header-container">
          <a href="">
            <img src={Logo} alt="image" className="logoHeader"/>
          </a>
          <div className="block"><div className="header-container__serch--content"><input className="header-container__serch" type="text" /><button className="btn-serch" type="hidden"></button> </div> </div>

          <div className="block"><span className="basket">$300</span></div>

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