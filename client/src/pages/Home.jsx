import React from 'react'
import {Box,styled,Grid,Typography,Button} from '@mui/material'
import { Link } from 'react-router-dom'
import { img1,img2 } from '../assets'


const Container=styled(Box)`
max-width:70rem;
margin:auto;
`
const Text=styled(Grid)`
margin-top:4.2rem;
`
const StyleButton=styled(Button)`
margin-top:1.7rem;
padding:auto 20px;
`

const Home = (props) => {
  
  return (
   
    <Container>
    <Grid container spacing={8}>
      <Text item sm={12} md={5} xs={12} style={{lineHeight:1.5}}>
        <Typography className='dark:text-slate-200' variant="h3">Now interact with AI model using your voice</Typography>
        <Typography className='dark:text-slate-200' style={{lineHeight:'1.6'}}>With talkbot, you can ask anything with AI without even typing. Ai will also answer to you not in text but voice also. Join the modern AI revolution.
         Just tap on the microphone icon and get started.
         </Typography>
        
         <StyleButton><Link to="/create-chat" className="font-inter font-medium bg-[#1976D2] text-white px-4 py-2 rounded-md">Lets Chat</Link></StyleButton>
    
      </Text>
      <Grid item sm={12} md={7} xs={0}>
        <img src={img1} style={{marginLeft:'4.5rem',width:'90%'}}alt="" srcset=""/>
      </Grid>
      
    </Grid>
    </Container>
  )
}

export default Home

