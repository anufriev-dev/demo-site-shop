import React  from 'react'
import './styles.scss'
import { Button } from '../button/Button'

function Post ({item,text,onCl}) {

  return(
    <>
    <div className="post" data-id={item.articul}>
      <img className="post__img" src={`http://localhost:4000/${item.img}`} alt="картинка" width={300} height={300}/>
      <p className="post__desc">{item.title}</p>
      <div className="post__wrapPrice"> 
      <span><b>$</b><span className="post__price">{item.price}</span></span>  
        <Button className={'btn-post'} text={text}  />
      </div>
    </div>  
    </>
  )
}

export default Post