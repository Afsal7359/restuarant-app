
import React,{useState} from 'react'
import {Box, Button, Typography} from '@mui/material'
import {styled} from "@mui/system"
import CustomButton from "../../Components/CustomButton/CustomButton";
import {Container}from "@mui/system";
import welcome from '../../assets/welcome.png'

const Welcome = () => {
    
    const CustomBox = styled(Box)(({theme})=>({
        display:"flex",
        justifyContent:"center",
        gap:theme.spacing(-20),
        marginTop:theme.spacing(3),
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            alignItem:"center",
            textAlign:"center",
        },

    }));

    const Title = styled(Typography)(({theme})=>({
        fontSize:"64px",
        color:"#fff",
        fontWeight:"bold",
        margin:theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("sm")]:{
            fontSize:'40px',
        },
    }));

    return(
        <Box sx={{background:"#FED801", minHeight:"80vh",}}>
            <Container>
                <CustomBox>
                    <Box sx={{flex:"1"}}>
                        <Typography
                          variant='body2'
                          sx={{
                            fontSize:"18px",
                            color:"#687690",
                            fontWeight:"500",
                            mt:10,
                            md:4,
                          }}  
                        >
                            Welcome to Grand Restuarent
                        </Typography>
                        <Title variant='h1'>
                            Discover a place <br></br>
                          where you'll <br></br>
                           love to Eat.
                        </Title>
                        <Typography
                        variant='body2'
                        sx={{fontSize:"18px", color:"#5A6473",my: 4}}
                        > 
                            eat ,drink,sleep,repeat,sfgsyhrvr guvr ehgli ubjh rigb htij gfjrf dnjvb digsh fbiag dbsfi hrfijr efojr gfihw erfgo jsvob hfvb fhvb vn                        </Typography>
                        <CustomButton
                        backgroundColor="#0F1B4C"
                        color="#fff"
                        buttonText="More About Us"
                        welcomeBtn={true}
                        >
                        </CustomButton>
                    </Box>

                    <Box sx={{flex:"1.25"}}>
                        <img
                        src={welcome}
                        alt="welcome"
                        style={{maxWidth:"100%" , marginBottom:"3rem"}}
                        />
                    </Box>
                </CustomBox>
            </Container>
        </Box>
    );
};

export default Welcome