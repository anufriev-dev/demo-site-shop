import React from 'react'
import './postBasket.scss'

export default function PostBasket({item,deLete}) {

  return (
    <>
    <div className="post" data-id={item.articul}>
      <img className="post__img" src={`http://localhost:4000/${item.img}`} alt="картинка" width={300} height={300}/>
      <p className="post__desc">{item.title}</p>
      <div className="post__wrapPrice"> 
      <span><b>$</b><span className="post__price">{item.price}</span></span>  
        <button onClick={e => deLete(e)} className="post-delete ">Удалить</button>
      </div>
    </div>  
    </>
  )
}
