import './SectionSlideHz.scss';
import {MySlideHz} from '../MySlideHz/MySlideHz.jsx';

function SectionSlideHz () {
  return (
    <div className='container'>
      <section className='slider-header-hz'>
        <MySlideHz />
        <h2 className='slider-header-hz__title'>FEATURED PRODUCTS</h2>
      </section>
    </div>
  );
}
export {SectionSlideHz};