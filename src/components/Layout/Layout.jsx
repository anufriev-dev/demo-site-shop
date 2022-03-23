import {Outlet} from 'react-router-dom';

import {Header} from '../Header/Header.jsx';
import { SectionSlide } from '../SectionSlide/SectionSlide.jsx';
import {Footer} from '../Footer/Footer.jsx';

function Layout () {
  return (
    <>
    <Header />
    <SectionSlide />
    <main>
      <Outlet/>
    </main>

    <Footer />
    </>
  );
}
export {Layout};