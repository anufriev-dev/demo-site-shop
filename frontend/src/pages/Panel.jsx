import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllProduct,deleteProduct,createProduct,getOneProduct,updateProduct } from '../store/adminPanelSlice'
import {setTitle,setPrice,setOneProductTitle,setOneProductPrice} from '../store/adminPanelSlice'
import { Link } from 'react-router-dom'
import FormPanel from '../components/FormPanel'


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

    <div > 
        {error && <h2>{error}</h2>}
        <Link  to="/admin">Назад</Link>
    <div >
      <div>
      <FormPanel 
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
      <div >
      <div >
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
      <div >
        <table >
          <tbody>
          <tr >
            <th >Номер</th>        
            <th >ID</th>
            <th >Название</th>
            <th >Цена</th>
            <th >Картинка</th>
            <th colSpan="2" >Настройки</th>
          </tr>
          {store.map((item,index) => (
            <tr  key={item.productid}>
              <td >{index + 1}</td>         
              <td >{item.productid}</td>
              <td >{item.title}</td>
              <td >{item.price}</td>
              <td ><a target="_blank" href={`http://localhost:4000/${item.img}`}>ссылка</a></td>
              <td ><button onClick={() => dispatch(getOneProduct(item.productid))}>Обновить</button></td>
              <td ><button onClick={() => prev(item) } >Удалить</button></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Panel