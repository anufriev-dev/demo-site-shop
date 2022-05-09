import React,{useEffect} from 'react'
import {getAllOrder} from '../store/orderSlice'
import {useDispatch, useSelector} from 'react-redux'
import OrderLi from '../components/OrderLi'
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
    <div >
      <h1 >Это Заказы users</h1>

      <table >
        <tbody>
          <tr >
            <th >allArticul</th>
            <th >email</th>
            <th >text</th>
          </tr>
          {data.map((item,index) => (
        <OrderLi item={item} key={index} />
      ))}
        </tbody>
      </table>
          <Link to="/admin">Назад</Link>
    </div>
  )
}

export default PanelOrder