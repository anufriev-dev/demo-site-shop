import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

function Card({title,text,btn,link}) {
  return (
    <>
      <div className="postBlockAdmin">
        <h1>{title}</h1>
        <p className="postBlockAdmin__text">{text}</p>
        <Link className="link-adminka" to={link}>{btn}</Link>
      </div>
    </>
  )
}
export default Card