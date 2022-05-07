import React from 'react'
import {Outlet} from 'react-router-dom'

import {Header} from '../header/Header'
import {SectionSlideVr} from '../sectionSlideVr/SectionSlideVr'
import {SectionSlideHz} from '../sectionSlideHz/SectionSlideHz'
import {Footer} from '../footer/Footer'

function Layout () {
  return (
    <>
    <Header />
    {/* <SectionSlideVr /> */}
    {/* <SectionSlideHz /> */}
    <main>
      <Outlet/>
    </main>

    <Footer />
    </>
  )
}
export {Layout}