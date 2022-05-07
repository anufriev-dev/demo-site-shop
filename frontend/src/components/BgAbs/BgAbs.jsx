import React from 'react'
import './styles.scss'
import classNames from 'classnames'

function BgAbs ({background,boxShadow,zindex,top,className}) {
  const classes = classNames('BgAbs',className)
  return (
    <div className={classes} style={{background:background,boxShadow: boxShadow, zIndex: zindex,top:top}}></div>
  )
}
export {BgAbs}