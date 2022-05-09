import React from 'react'
import {useDispatch } from 'react-redux'
import {setImg,setProductid} from '../store/adminPanelSlice'


function FormPanel({name, nameBtn,title,price,onChangeTitle,onChangePrice,submit,productid}) {

  const dispatch = useDispatch()

  function fileUp (e) {
    e.preventDefault()
    dispatch(setProductid(productid))
    dispatch(setImg(e.target.files[0]))
  }
  
  return (
    <>
    <form >
      <h1 >{name}</h1>
      <div >
        <label >Название</label>
        <input value={title} id="form-admin__ni21" 
         type="text" 
        onChange={e => dispatch(onChangeTitle(e.target.value))}
        />
      </div>
      <div >
        <label htmlFor="form-admin__ni22">Цена</label>
        <input value={price} id="form-admin__ni22" 
         type="text" 
        onChange={e => dispatch(onChangePrice(e.target.value))} 
        />
      </div>
      <div >
        <input  type="file" onChange={e => fileUp(e)}/>
      </div>
      <button onClick={submit} >{nameBtn}</button>
  </form>
  </>
  )
}

export default FormPanel