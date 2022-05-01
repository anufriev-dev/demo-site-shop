import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllProduct,createOrder } from '../../store/basketSlice'
import { Link } from 'react-router-dom'
import { setEmail,setTextArea } from '../../store/basketSlice'
import { setBasket } from '../../store/basketSlice'

import './basket.scss'
import PostBasket from '../../components/postBasket/PostBasket.jsx'

function Basket() {
  
  const {data,email,textArea,keys,basket} = useSelector(state => state.basket)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProduct())
  },[keys])

 async function deLete (e) {
    e.preventDefault()
    const self = e.currentTarget
    const relative = self.closest('.post')
    const dataAtt = relative.getAttribute('data-id')
    const data = await JSON.parse(localStorage.getItem(dataAtt))
    const sub = await JSON.parse(localStorage.getItem('basket')) - data.price
    dispatch(setBasket(sub))
    localStorage.setItem('basket', sub) 
    localStorage.removeItem(dataAtt)

    dispatch(getAllProduct())
  }

  const order =  (e) => {
    e.preventDefault()
    const keysHere = Object.keys(localStorage)
    const articulArr =  keysHere.filter(item => item !== 'basket')

    const body = new FormData()
    body.append('email',email)
    body.append('textArea',textArea)
    body.append('articul',articulArr)

    dispatch(createOrder(body)) 

    document.location.href ='http://localhost:3000/basket/order'
  }

  return (

  <div className="containerMy">

    <div>
      <div className="headerBasket">
          <h2>Корзина</h2>
        <Link className="Link" to="/">Назад</Link>
      </div>
    </div>

    {data.map((item,index) => (
      <PostBasket deLete={deLete} item={item}  key={index}/>
    ))}

    <div className="headerBasket">
      <form action="" method="POST" className="form-basket">
        <h3>Введите свой номер email</h3>
        <input value={email} required="required" onChange={e => dispatch(setEmail(e.target.value))} type="text" name="emailBasket" />
        <h3 className="form-basket__title">Комментарий к заказу</h3>
        <textarea value={textArea} onChange={e => dispatch(setTextArea(e.target.value))} className="form-basket__text" name="" id="" cols="30" rows="10"></textarea>
        <div className="Basket-wrap">
          <button onClick={order} className="form-basket__btn">Заказать</button>
          <span>Цена:  {basket}$</span>
        </div>
      </form>
    </div>
  </div>
  )
}
export default Basket