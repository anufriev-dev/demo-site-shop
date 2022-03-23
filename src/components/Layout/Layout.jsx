import {Outlet} from 'react-router-dom';

import {Header} from '../Header/Header.jsx';
import { SectionSlideVr } from '../SectionSlideVr/SectionSlideVr.jsx';
import {SectionSlideHz} from '../SectionSlideHz/SectionSlideHz.jsx';
import {Footer} from '../Footer/Footer.jsx';

function Layout () {
  return (
    <>
    <Header />
    <SectionSlideVr />
    <SectionSlideHz />
    <main>
      <Outlet/>
    </main>

    <Footer />
    </>
  );
}
export {Layout};