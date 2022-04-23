import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllProduct,deleteProduct,createProduct } from '../../store/adminPanelSlice'
import {setTitle,setPrice,setImg} from '../../store/adminPanelSlice'
import { Link } from 'react-router-dom'

import './panel.scss'

function Panel() {

  const {store, error,title,img,price} = useSelector(state => state.adminPanel)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProduct())
  }, [])

  useEffect (() => {
    document.querySelector('.form-admin__btn').addEventListener('click', sub)
  },[])

  function sub (e) {
    e.preventDefault()
  }
  function prev (item) {
   let res = window.confirm('Вы точно уверены что хотите удалить пост???')
   if(res) {
    dispatch(deleteProduct(item.productid))
   }
  }

  function createProd (e) {
    e.preventDefault()
    const file = document.querySelector('.inputFile')
    const form = new FormData()
    form.append('title',title)
    form.append('price',price)
    form.append('img',file.files[0])
    console.log(file.files[0])
    dispatch(createProduct(form))
  }

  return (

    <div className="wrap-admin"> 
        {error && <h2>{error}</h2>}
        <Link to="/admin">Назад</Link>
    <div className="wrap-cell-admin grid1">
      <div className="wrap-form-admin">
      <form action="" method="post" className="form-admin">
        <h1>Добавить товар</h1>
        <div className="form-admin__block">
          <label htmlFor="form-admin__ni1">Название</label>
          <input value={title} onChange={e => dispatch(setTitle(e.target.value))} id="form-admin__ni1" className="form-admin__in" type="text" />
        </div>
        <div className="form-admin__block">
          <label htmlFor="form-admin__ni2">Цена</label>
          <input value={price} onChange={e => dispatch(setPrice(e.target.value))} id="form-admin__ni2" className="form-admin__in" type="text" />
        </div>
        <div className="form-admin__block">
          <input className="inputFile" type="file" onChange={e => dispatch(setImg(e.target[0]))}/>
        </div>
        <button onClick={createProd} className="form-admin__btn">Добавить</button>
      </form>
      </div>
    </div>
      <div className="grid3 wrap-cell-admin ">
      <div className="wrap-form-admin">
      <form action="" method="post" className="form-admin">
        <h1>Обновить товар</h1>
        <div className="form-admin__block">
          <label htmlFor="form-admin__ni21">Название</label>
          <input id="form-admin__ni21" className="form-admin__in" type="text" />
        </div>
        <div className="form-admin__block">
          <label htmlFor="form-admin__ni22">Цена</label>
          <input id="form-admin__ni22" className="form-admin__in" type="text" />
        </div>
        <div className="form-admin__block">
          <input type="file" />
        </div>
        <button className="form-admin__btn">Обновить</button>
      </form>
      </div>
      </div>
      <div className="wrap-cell-admin grid2">
        <table className="table-admin">
          <tbody>
          <tr className="table-admin__tr">
            <th className="table-admin__th">Название</th>
            <th className="table-admin__th">Цена</th>
            <th className="table-admin__th">Картинка</th>
            <th colSpan="2" className="table-admin__th">Настройки</th>
          </tr>
          {store.map(item => (
            <tr className="table-admin__tr" key={item.productid}>
              <td className="table-admin__td">{item.title}</td>
              <td className="table-admin__td">{item.price}</td>
              <td className="table-admin__td"><a target="_blank" href={`http://localhost:4000/${item.img}`}>ссылка</a></td>
              <td className="table-admin__tdUP"><button className="table-admin__btnUp">Обновить</button></td>
              <td className="table-admin__tdDE"><button onClick={() => prev(item) } className="table-admin__btnDe">Удалить</button></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Panel