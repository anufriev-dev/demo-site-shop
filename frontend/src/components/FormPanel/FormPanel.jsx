import React from 'react'
import './styles.scss'
import {useDispatch } from 'react-redux'
import {setImg,setProductid} from '../../store/adminPanelSlice'


function FormPanel({name, nameBtn,title,price,onChangeTitle,onChangePrice,submit,className,productid}) {

  const dispatch = useDispatch()

  function fileUp (e) {
    e.preventDefault()
    dispatch(setProductid(productid))
    dispatch(setImg(e.target.files[0]))
  }
  
  return (
    <>
    <form className={`form-admin ${className}`}>
      <h1 className="form-admin__titel">{name}</h1>
      <div className="form-admin__block">
        <label htmlFor="form-admin__ni21">Название</label>
        <input value={title} id="form-admin__ni21" 
        className="form-admin__in" type="text" 
        onChange={e => dispatch(onChangeTitle(e.target.value))}
        />
      </div>
      <div className="form-admin__block">
        <label htmlFor="form-admin__ni22">Цена</label>
        <input value={price} id="form-admin__ni22" 
        className="form-admin__in" type="text" 
        onChange={e => dispatch(onChangePrice(e.target.value))} 
        />
      </div>
      <div className="form-admin__block">
        <input className="inputFile" type="file" onChange={e => fileUp(e)}/>
      </div>
      <button onClick={submit} className="form-admin__btn">{nameBtn}</button>
  </form>
  </>
  )
}

export default FormPanel