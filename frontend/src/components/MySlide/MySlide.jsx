import Slider from 'react-slick';
import { BgAbs } from '../BgAbs/BgAbs';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./MySlide.scss";

import Layer1 from '../../img/Layer1.png';


function MySlide () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 4000
  };
  return (
    <>
      <div>
      <BgAbs className="BgAbsVr" />
      </div>
      <div className="wrappSlider">
      <Slider {...settings}>
        <div>
          <div className="flex-slideMy">
            <img className='flex-slideMy__img' src={Layer1} alt="" width="300" height="330"/>
            <div className="slide-content flex-slideMy__box">
              <h2 className='slide-content__title'>COWHIDE  STANDARD CREW</h2>
              <p className='slide-content__text'>White coloured, short-sleeved, printed T-shirt for men by Levi's. This crew-neck T-shirt is made of organic cotton and comes in a regular fit. </p>
              <button className='slide-content__btn'>SHOP NOW</button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex-slideMy">
            <img className='flex-slideMy__img' src={Layer1} alt="" width="300" height="330"/>
            <div className="slide-content flex-slideMy__box">
              <h2 className='slide-content__title'>COWHIDE  STANDARD CREW</h2>
              <p className='slide-content__text'>White coloured, short-sleeved, printed T-shirt for men by Levi's. This crew-neck T-shirt is made of organic cotton and comes in a regular fit. </p>
              <button className='slide-content__btn'>SHOP NOW</button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex-slideMy">
            <img className='flex-slideMy__img' src={Layer1} alt="" width="300" height="330"/>
            <div className="slide-content flex-slideMy__box">
              <h2 className='slide-content__title'>COWHIDE  STANDARD CREW</h2>
              <p className='slide-content__text'>White coloured, short-sleeved, printed T-shirt for men by Levi's. This crew-neck T-shirt is made of organic cotton and comes in a regular fit. </p>
              <button className='slide-content__btn'>SHOP NOW</button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex-slideMy">
            <img className='flex-slideMy__img' src={Layer1} alt="" width="300" height="330"/>
            <div className="slide-content flex-slideMy__box">
              <h2 className='slide-content__title'>COWHIDE  STANDARD CREW</h2>
              <p className='slide-content__text'>White coloured, short-sleeved, printed T-shirt for men by Levi's. This crew-neck T-shirt is made of organic cotton and comes in a regular fit. </p>
              <button className='slide-content__btn'>SHOP NOW</button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex-slideMy">
            <img className='flex-slideMy__img' src={Layer1} alt="" width="300" height="330"/>
            <div className="slide-content flex-slideMy__box">
              <h2 className='slide-content__title'>COWHIDE  STANDARD CREW</h2>
              <p className='slide-content__text'>White coloured, short-sleeved, printed T-shirt for men by Levi's. This crew-neck T-shirt is made of organic cotton and comes in a regular fit. </p>
              <button className='slide-content__btn'>SHOP NOW</button>
            </div>
          </div>
        </div>
      </Slider>
      </div>
    </>
  );
}
export {MySlide};