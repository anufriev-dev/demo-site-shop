import React  from 'react'
import './Post.scss'
import { Button } from '../Button/Button'

function Post ({item}) {
  return(
    <>
    <div className="post">
      <img className="post__img" src={item.img} alt="картинка" width={300} height={300}/>
      <p className="post__desc">{item.title}</p>
      <div className="post__wrapPrice"> 
      <span><b>$</b><span className="post__price">{item.price}</span></span>  
        <Button className={'btn-post'} text={'BUY NOW'}  />
      </div>
    </div>  
    </>
  )
}

export default Post