import "./Nav.scss";

function Nav () {
  return (
    <>
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item"><a href="#" className="nav__link">HOME</a></li>
        <li className="nav__item">|</li>
        <li className="nav__item"><a href="#" className="nav__link">SALE</a></li>
        <li className="nav__item">|</li>
        <li className="nav__item"><a href="#" className="nav__link">HANDBAGS</a></li>
        <li className="nav__item">|</li>
        <li className="nav__item"><a href="#" className="nav__link">WALLETS</a></li>
        <li className="nav__item">|</li>
        <li className="nav__item"><a href="#" className="nav__link">ACCESSORIES</a></li>
        <li className="nav__item">|</li>
        <li className="nav__item"><a href="#" className="nav__link">MENTS STORE</a></li>
        <li className="nav__item">|</li>
        <li className="nav__item"><a href="#" className="nav__link">SHOES</a></li>
        <li className="nav__item">|</li>
        <li className="nav__item"><a href="#" className="nav__link">VINTAGE</a></li>
        <li className="nav__item">|</li>
        <li className="nav__item"><a href="#" className="nav__link">SERVICES</a></li>
        <li className="nav__item">|</li>
        <li className="nav__item"><a href="#" className="nav__link">CONTACT US</a></li>
      </ul>
    </nav>
    </>
  );
}
export {Nav};