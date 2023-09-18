import {styled} from '@mui/system';
import { Container, Typography ,Box} from '@mui/material'
import React from 'react'
import logoImg from "../../assets/Vector Smart Object.png"
import StarsImg from "../../assets/Star.png"
import logoImgs from "../../assets/logos.png"
function Partner() {

    const CustomContainer = styled(Container)(({theme})=>({
        display:"flex",
        justifyContent:"space-between",
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            alignItems:"center",
            textAlign:"center",
            marginBottom:theme.spacing(4),
        },
    }));

    const CustomBox = styled(Box)(({theme})=>({
        [theme.breakpoints.down("md")]:{
            marginBottom:theme.spacing(4),
        },
    }));
  return (
    <Box sx={{mt:10}}> 
        <CustomContainer>
            <CustomBox>
                  <img src={logoImg} alt="logo" style={{maxWidth:"100%"}}/>  
                  <Typography
                  variant='body2'
                  sx={{
                    color:"#7DB589",
                    fontSize:"16px",
                    fontWeight:"bold",
                    mt:2,
                  }}
                  >
                    More than 4500 Customers
                  </Typography>
            </CustomBox>

            <Box>
                <img src={StarsImg} alt="stars" style={{maxWidth:"100%"}}/>
                  <Typography
                  variant='body2'
                  sx={{
                    color:"#7DB589",
                    fontSize:"16px",
                    fontWeight:"bold",
                    mt:2,
                  }}
                  >
                    5-Star Rating (2k+ Reviews)
                  </Typography>
            </Box>
        </CustomContainer>

        <Container sx={{display:"flex", flexDirection:"column"}}>
            <img src={logoImgs} alt='logoimgs' />

        </Container>
    </Box>
  )
}

export default Partner