import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllProduct,deleteProduct,createProduct,getOneProduct,updateProduct } from '../../store/adminPanelSlice'
import {setTitle,setPrice,setOneProductTitle,setOneProductPrice} from '../../store/adminPanelSlice'
import { Link } from 'react-router-dom'
import FormPanel from '../../components/formPanel/FormPanel'

import './styles.scss'

function Panel() {

  const {store, error,title,price,oneProduct,amountPost,productid} = useSelector(state => state.adminPanel)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProduct())
  }, [amountPost])

  function prev (item) {
   const res = window.confirm('Вы точно уверены что хотите удалить пост???')
   if(res) {
    dispatch(deleteProduct(item.productid))
   }
  }

  function createProd (e) {
    e.preventDefault()
    dispatch(createProduct())
  }

  function updateProd (e) {
    e.preventDefault()
    dispatch(updateProduct())
  }
  if(!store) {
    return (
      <h1>Загрузка</h1>
    )
  }
  return (

    <div className="wrap-admin"> 
        {error && <h2>{error}</h2>}
        <Link className="Link" to="/admin">Назад</Link>
    <div className="wrap-cell-admin grid1">
      <div className="wrap-form-admin">
      <FormPanel 
        className="form-admin--add"
        name="Добавить товар" 
        nameBtn="Добавить" 
        title={title}
        price={price}
        onChangeTitle={setTitle}
        onChangePrice={setPrice}
        submit={(e) => createProd(e)}
        />
      </div>
    </div>
      <div className="grid3 wrap-cell-admin ">
      <div className="wrap-form-admin">
      <FormPanel 
        name="Обновить товар" 
        nameBtn="Обновить" 
        title={oneProduct[0].title}
        price={oneProduct[0].price}
        onChangeTitle={setOneProductTitle}
        onChangePrice={setOneProductPrice}
        submit={(e) => updateProd(e)}
        productid={oneProduct[0].productid}
        id={productid}
        />
      </div>
      </div>
      <div className="wrap-cell-admin grid2">
        <table className="table-admin">
          <tbody>
          <tr className="table-admin__tr">
            <th className="table-admin__th">Номер</th>        
            <th className="table-admin__th">ID</th>
            <th className="table-admin__th">Название</th>
            <th className="table-admin__th">Цена</th>
            <th className="table-admin__th">Картинка</th>
            <th colSpan="2" className="table-admin__th">Настройки</th>
          </tr>
          {store.map((item,index) => (
            <tr className="table-admin__tr" key={item.productid}>
              <td className="table-admin__td">{index + 1}</td>         
              <td className="table-admin__td">{item.productid}</td>
              <td className="table-admin__td">{item.title}</td>
              <td className="table-admin__td">{item.price}</td>
              <td className="table-admin__td"><a target="_blank" href={`http://localhost:4000/${item.img}`}>ссылка</a></td>
              <td className="table-admin__tdUP"><button onClick={() => dispatch(getOneProduct(item.productid))} className="table-admin__btnUp">Обновить</button></td>
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