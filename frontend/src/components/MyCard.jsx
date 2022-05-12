import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Button, Grid, Card, Typography, CardContent, CardActions } from '@mui/material'


const MyCard = ({title,text,btn,link}) => {

  const navigate = useNavigate()

  return (
    <>
      <Grid item xs={12} lg={6}>
        <Card sx={{height: '100%',display: 'flex',flexDirection: 'column',justifyContent: 'space-between'}}>
          <CardContent>
            <Typography
            variant="h4"
              >{title}
            </Typography>
          <Typography variant="body1" >{text}</Typography>
          </CardContent>
          <CardActions>
            <Button 
              variant="contained" 
              size="small" 
              color="secondary" 
              onClick={() => navigate(link) }
            >
              {btn}
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  )
}

export default MyCard