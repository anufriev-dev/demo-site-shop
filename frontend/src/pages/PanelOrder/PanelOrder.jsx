import React,{useEffect} from 'react'
import './styles.scss'
import {getAllOrder} from '../../store/orderSlice'
import {useDispatch, useSelector} from 'react-redux'
import OrderLi from '../../components/orderLi/OrderLi'
import {Link} from 'react-router-dom'

function PanelOrder() {
  const {data,message} = useSelector(state => state.orderslice)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllOrder())
  },[message])

  if(data === undefined) {
    return (
      <h1>Загрузка...</h1>
    )
  }
  return (
    <div className="order">
      <h1 className="order__title">Это Заказы users</h1>

      <table className="order__table">
        <tbody>
          <tr className="order__tr">
            <th className="order__th">allArticul</th>
            <th className="order__th">email</th>
            <th className="order__th">text</th>
          </tr>
          {data.map((item,index) => (
        <OrderLi item={item} key={index} />
      ))}
        </tbody>
      </table>
          <Link to="/admin" className="Link">Назад</Link>
    </div>
  )
}

export default PanelOrder