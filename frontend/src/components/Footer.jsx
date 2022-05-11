import { Box, Container } from '@mui/material'
import React from 'react'
import { purple,blue } from '@mui/material/colors'

function Footer () {
  return (
    <>
      <Box
      component="footer"
      sx={{background: blue[200],height:'300px'}}
      >
          <Container>
              <p></p>
          </Container>
      </Box>
    </>
  )
}
export {Footer}