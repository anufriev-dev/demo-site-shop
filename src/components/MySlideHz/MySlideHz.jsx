import './MySlideHz.scss';
import {Button} from '../Button/Button.jsx';
import { BgAbs } from '../BgAbs/BgAbs';
import Layer3 from '../../img/Layer3.png';
import Layer5 from '../../img/Layer5.png';
import Layer6 from '../../img/Layer6.png';

import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function MySlideHz () {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className='dots-Hz'>
      <BgAbs zindex="-2"  className="BgAbs-Hz-one" />
      <BgAbs top="560px"background="#ffff" className="BgAbs-Hz-two" />
      <div className="wrappSlider" style={{height: 190}}>
      <Slider {...settings}>
        <div>
          <div className="flex-slideMyHz">
            <img className='flex-slideMyHz__img' src={Layer3} alt="картика" width="192" height="130" />
            <div className="slideMyHz-container">
              <h3 className="slideMyHz-container__title">Title</h3>
              <p className="slideMyHz-container__text">Lorem ipsum dolor sit amet.</p>
              <Button className="Button-Hz" text="SHOP" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex-slideMyHz">
            <img className='flex-slideMyHz__img'  src={Layer5} alt="картика" width="192" height="130"/>
            <div className="slideMyHz-container">
              <h3 className="slideMyHz-container__title">Title</h3>
              <p className="slideMyHz-container__text">Lorem ipsum dolor sit amet.</p>
              <Button className="Button-Hz" text="SHOP" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex-slideMyHz">
            <img className='flex-slideMyHz__img' src={Layer6} alt="картика" width="192" height="130"/>
            <div className="slideMyHz-container">
              <h3 className="slideMyHz-container__title">Title</h3>
              <p className="slideMyHz-container__text">Lorem ipsum dolor sit amet.</p>
              <Button className="Button-Hz" text="SHOP" />
            </div>
          </div>
        </div>
        <div>

          <div className="flex-slideMyHz">
            <img className='flex-slideMyHz__img' src={Layer6} alt="картика" width="192" height="130" />
            <div className="slideMyHz-container">
              <h3 className="slideMyHz-container__title">Title</h3>
              <p className="slideMyHz-container__text">Lorem ipsum dolor sit amet.</p>
              <Button className="Button-Hz" text="SHOP" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex-slideMyHz">
            <img className='flex-slideMyHz__img' src={Layer5} alt="картика" width="192" height="130"/>
            <div className="slideMyHz-container">
              <h3 className="slideMyHz-container__title">Title</h3>
              <p className="slideMyHz-container__text">Lorem ipsum dolor sit amet.</p>
              <Button className="Button-Hz" text="SHOP" />
            </div>
          </div>
        </div>
      </Slider>
      </div>
      </div>
  );
}
export {MySlideHz};