import React  from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'

function Post ({item,text}) {
  
  return(
    <>
    <Grid xs={12}  md={4} sm={6}  item className="post" data-id={item.articul}>
      <Card>
        <CardContent>
          <CardMedia height="300" component="img" className="post__img"  src={`http://localhost:4000/${item.img}`} alt="картинка" width={300}/>
          <Typography variant="h5" component="h3" className="post__desc">{item.title}</Typography>
          <Typography variant="body1"><b>$</b><span className="post__price">{item.price}</span></Typography>  
        </CardContent>
        <CardActions>
          <Button className="btn-post">{text}</Button>
        </CardActions>
      </Card>
    </Grid>  
    </>
  )
}

export default Post