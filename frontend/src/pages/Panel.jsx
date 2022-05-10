import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllProduct,deleteProduct,createProduct,getOneProduct,updateProduct } from '../store/adminPanelSlice'
import {setTitle,setPrice,setOneProductTitle,setOneProductPrice} from '../store/adminPanelSlice'
import { Link } from 'react-router-dom'
import FormPanel from '../components/FormPanel'
import {Button,Typography, TableRow, Container, Modal, Table, TableContainer, TableHead, TableBody,TableCell} from '@mui/material'
import {styleModal} from '../utils/style'
import { Box } from '@mui/system'
import { Add } from '@mui/icons-material'
import {styleH1} from '../utils/style'



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

  const [openAdd, setOpenAdd] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)

  const refreshPost = (productid) => {
    dispatch(getOneProduct(productid))
    setOpenEdit(true)
  }


  if(!store) {
    return (
      <h1>Загрузка</h1>
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
            onChangeTitle={setTitle}
            onChangePrice={setPrice}
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
            <TableCell sx={{textAlign: 'center'}} colSpan="2" ><h2>Настройки</h2></TableCell>
          </TableRow>
         </TableHead>
          <TableBody >
          {store.map((item,index) => (
            <TableRow   key={item.productid}>
              <TableCell  >{index + 1}</TableCell>         
              <TableCell  >{item.productid}</TableCell>
              <TableCell  >{item.title}</TableCell>
              <TableCell  >{item.price}</TableCell>
              <TableCell  ><a target="_blank" href={`http://localhost:4000/${item.img}`}>ссылка</a></TableCell>
              <TableCell sx={{textAlign: 'center'}}  ><Button size="small" color="success" variant="outlined" onClick={() => refreshPost(item.productid)}>Обновить</Button></TableCell>
              <TableCell sx={{textAlign: 'center'}} ><Button size="small" color="error" variant="outlined" onClick={() => prev(item) } >Удалить</Button></TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Panel