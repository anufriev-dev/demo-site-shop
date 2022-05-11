import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllProduct,deleteProduct,createProduct,getOneProduct,updateProduct } from '../store/adminPanelSlice'
import {setTitle,setPrice,setOneProductTitle,setOneProductPrice,setDescpost,setRating} from '../store/adminPanelSlice'
import { Link } from 'react-router-dom'
import FormPanel from '../components/FormPanel'
import {Button,Typography, TableRow, Container, Modal, Table, TableContainer, TableHead, TableBody,TableCell, TextField, NativeSelect, CircularProgress} from '@mui/material'
import {styleModal, styleSpiner} from '../utils/style'
import { Box } from '@mui/system'
import { Add } from '@mui/icons-material'
import {styleH1} from '../utils/style'



function Panel() {

  const {status,descpost,rating,store, error,title,price,oneProduct,amountPost,productid} = useSelector(state => state.adminPanel)
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

  const [openAdd, setOpenAdd] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)

  const refreshPost = (productid) => {
    dispatch(getOneProduct(productid))
    setOpenEdit(true)
  }

  /* Поиск */
  const [valueSch,setValueSch] = useState('1')
  const [serch, setSerch] = useState('')

  const [filterData, setFilterData] = useState([])
  useEffect(() => {
    setFilterData([...store]?.filter((item) => {

      switch(valueSch){
        case '1':
          return item.title.toLowerCase().includes(serch.trim().toLowerCase())
        case '2':
          return item.productid.toString().toLowerCase().includes(serch.trim().toLowerCase())
        case '3':
          return item.price.toString().toLowerCase().includes(serch.trim().toLowerCase())
        case '4':
          return item.rating.toString().toLowerCase().includes(serch.trim().toLowerCase())
        case '5':
          return item.descpost.toLowerCase().includes(serch.trim().toLowerCase())
      }  
    }))
  }, [store,serch,valueSch])

  if(status === 'loading') {
    return (
      <div style={styleSpiner}>
        <CircularProgress />
      </div>
     )
  }
  if(error) {
    return  <h2>{error}</h2>
  }
  return (
    <Container > 

    <Typography 
        variant="h1"
        sx={{...styleH1,mb: '1em'}}
      >Заказы</Typography>
      <label style={{marginRight: '1em'}}>Искать по</label>
      <NativeSelect onChange={(e) => setValueSch(e.target.value)} value={valueSch} sx={{mb:'2em'}}>
        <option value={1}>Названию</option>
        <option value={2}>id</option>
        <option value={3}>Цене</option>
        <option value={4}>Рейтингу</option>
        <option value={5}>Описанию</option>
      </NativeSelect>
      <TextField onChange={(e) => setSerch(e.target.value)} sx={{mb:'2em'}} fullWidth label="Поиск" variant="filled" color="success" />
      <Button 
      endIcon={<Add />} 
      size="large" 
      variant="contained" 
      onClick={() => setOpenAdd(true) } 
      sx={{mb: '2em'}}
      >
        Добавить товар
      </Button>
      <Modal
        open={openAdd}
        onClose={() => setOpenAdd(false) }
        >
        <Box sx={styleModal}>
          <FormPanel 
            name="Добавить товар" 
            nameBtn="Добавить" 
            title={title}
            price={price}
            descpost={descpost}
            rating={rating}
            onChangeTitle={setTitle}
            onChangePrice={setPrice}
            setRating={setRating}
            setDescpost={setDescpost}
            submit={(e) => createProd(e)}
            modalFunc={setOpenAdd}
            />
          </Box>
      </Modal>
        <Modal 
            open={openEdit}
            onClose={() => setOpenEdit(false)}
          >
          <Box sx={styleModal}>
          <FormPanel 
            name="Обновить товар" 
            nameBtn="Обновить" 
            title={oneProduct[0].title}
            price={oneProduct[0].price}
            onChangeTitle={setOneProductTitle}
            onChangePrice={setOneProductPrice}
            descpost={descpost}
            rating={rating}
            setRating={setRating}
            setDescpost={setDescpost}
            submit={(e) => updateProd(e)}
            productid={oneProduct[0].productid}
            id={productid}
            modalFunc={setOpenEdit}
            />
          </Box>
        </Modal>

      <TableContainer sx={{mb:'4em'}} >
        <Table  >
        <TableHead>
          <TableRow >
            <TableCell ><h2>Номер</h2></TableCell>        
            <TableCell ><h2>ID</h2></TableCell>
            <TableCell ><h2>Название</h2></TableCell>
            <TableCell ><h2>Цена</h2></TableCell>
            <TableCell ><h2>Картинка</h2></TableCell>
            <TableCell ><h2>Рейтинг</h2></TableCell>
            <TableCell ><h2>Описание</h2></TableCell>
            <TableCell sx={{textAlign: 'center'}} colSpan="2" ><h2>Настройки</h2></TableCell>
          </TableRow>
         </TableHead>
          <TableBody >
          {filterData
          ?filterData.map((item,index) => (
            <TableRow   key={index}>
              <TableCell  >{index + 1}</TableCell>         
              <TableCell  >{item.productid}</TableCell>
              <TableCell  >{item.title}</TableCell>
              <TableCell  >{item.price}</TableCell>
              <TableCell  ><a target="_blank" href={`http://localhost:4000/${item.img}`}>ссылка</a></TableCell>
              <TableCell  >{item.rating}</TableCell>
              <TableCell  >{item.descpost	}</TableCell>
              <TableCell sx={{textAlign: 'center'}}  ><Button size="small" color="success" variant="outlined" onClick={() => refreshPost(item.productid)}>Обновить</Button></TableCell>
              <TableCell sx={{textAlign: 'center'}} ><Button size="small" color="error" variant="outlined" onClick={() => prev(item) } >Удалить</Button></TableCell>
            </TableRow>
          ))
          : null
          }
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Panel