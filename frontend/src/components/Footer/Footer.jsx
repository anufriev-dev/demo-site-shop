import './Footer.scss'

import {BgAbs} from '../BgAbs/BgAbs.jsx'
import {Link} from 'react-router-dom'

function Footer () {
  return (
    <>
      <footer className="footer">
        <div>
        <BgAbs className="BgAbs__footer"/>
        </div>
        <div className="containerMy">
          <div className="wrapFooter">
            <div className="wrapBlock">
              <h2 className="footer__title">Lorem, ipsum dolor.</h2>
                <nav className="navf">
                  <ul className="navf__list">
                    <li className="navf__item"><Link to="/" className="navf__link">Далеко-далеко, за.</Link></li>
                    <li className="navf__item"><Link to="/" className="navf__link">Далеко-далеко, за.</Link></li>
                    <li className="navf__item"><Link to="/" className="navf__link">Далеко-далеко, за.</Link></li>
                    <li className="navf__item"><Link to="/" className="navf__link">Lorem, ipsum.</Link></li>
                    <li className="navf__item"><Link to="/" className="navf__link">Lorem, ipsum.</Link></li>
                    <li className="navf__item"><Link to="/" className="navf__link">Lorem, ipsum.</Link></li>
                  </ul>
                </nav>
              </div>

              <div className="wrapBlock">
              <h2 className="footer__title">Lorem, ipsum dolor.</h2>
                <nav className="navf">
                  <ul className="navf__list">
                    <li className="navf__item"><Link to="/" className="navf__link">Далеко-далеко, за.</Link></li>
                    <li className="navf__item"><Link to="/" className="navf__link">Далеко-далеко, за.</Link></li>
                    <li className="navf__item"><Link to="/" className="navf__link">Далеко-далеко, за.</Link></li>
                    <li className="navf__item"><Link to="/" className="navf__link">Lorem, ipsum.</Link></li>
                    <li className="navf__item"><Link to="/" className="navf__link">Lorem, ipsum.</Link></li>
                    <li className="navf__item"><Link to="/" className="navf__link">Lorem, ipsum.</Link></li>
                  </ul>
                </nav>
              </div>

              <div className="wrapBlock">
              <h2 className="footer__title">Lorem, ipsum dolor.</h2>
                <nav className="navf">
                  <ul className="navf__list">
                    <li className="navf__item"><Link to="/" className="navf__link">Далеко-далеко, за.</Link></li>
                    <li className="navf__item"><Link to="/" className="navf__link">Далеко-далеко, за.</Link></li>
                    <li className="navf__item"><Link to="/" className="navf__link">Далеко-далеко, за.</Link></li>
                    <li className="navf__item"><Link to="/" className="navf__link">Lorem, ipsum.</Link></li>
                    <li className="navf__item"><Link to="/" className="navf__link">Lorem, ipsum.</Link></li>
                    <li className="navf__item"><Link to="/" className="navf__link">Lorem, ipsum.</Link></li>
                  </ul>
                </nav>
              </div>
              
              <div className="wrapBlock">
              <h2 className="footer__title">Lorem, ipsum dolor.</h2>
                <nav className="navf">
                  <ul className="navf__list">
                    <li className="navf__item"><Link to="/" className="navf__link">Далеко-далеко, за.</Link></li>
                    <li className="navf__item"><Link to="/" className="navf__link">Далеко-далеко, за.</Link></li>
                    <li className="navf__item"><Link to="/" className="navf__link">Далеко-далеко, за.</Link></li>
                    <li className="navf__item"><Link to="/" className="navf__link">Lorem, ipsum.</Link></li>
                    <li className="navf__item"><Link to="/" className="navf__link">Lorem, ipsum.</Link></li>
                    <li className="navf__item"><Link to="/" className="navf__link">Lorem, ipsum.</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="footer-footer">
                <p>Copiright 2013 CSS Author</p>
          </div>
      </footer>
    </>
  )
}
export {Footer}