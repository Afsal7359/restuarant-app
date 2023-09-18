import React, {useState} from 'react'
import {Box, Typography} from '@mui/material'
import {styled} from "@mui/system"
import CustomButton from '../CustomButton/CustomButton';
import logoImg from "../../assets/Vector Smart Object.png"
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServiceIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
}from "@mui/material";
import { useNavigate } from "react-router-dom";


function Header() {

const [MobileMenu, setMobileMenu] = useState({left:false})

const navigate = useNavigate()

const toogleDrawer =(anchor,open)=>(event)=>{
  if(event.type === "keydown" && (event.type === "Tab" || event.type === "shift" )){
    return;
  }
  setMobileMenu({...MobileMenu,[anchor]:open})
}

    const list = (anchor)=>(
      <Box sx={{
        width:anchor === "top" || anchor === "bottom" ? "auto" : 250
      }}
      role="presentation"
      onClick={toogleDrawer(anchor,false)}
      onKeyDown = {toogleDrawer(anchor,false)}
      >
        <List>
          {
            nav_titles.map((item,index)=>(
              <ListItem key={index} disablePadding onClick={()=>navigate(item.path)}>
              <ListItemButton>
               <ListItemIcon>
                 {
                  index ===0 && <HomeIcon></HomeIcon>
                 }
                 {
                  index ===1 && <FeaturedPlayListIcon></FeaturedPlayListIcon>
                 }
                 {
                  index ===2 && <MiscellaneousServiceIcon></MiscellaneousServiceIcon>
                 }
                 {
                  index ===3 && <ContactsIcon></ContactsIcon>
                 }
               </ListItemIcon>
               <ListItemText primary={item.display}/>
             </ListItemButton>
           </ListItem>
            ))

          }
        
        </List>

      </Box>

    )


    const nav_titles=[{
        path:'/',
        display:'Home'
    },
    {
        path: '/dishes',
        display:'Dishes'
    },
    {
        path: '/services',
        display:'Services'
    },
    {
        path: '/about',
        display:'About Us'
    },]



    const NavBarLinkBox = styled(Box)(({theme})=>({
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:theme.spacing(3),
        [theme.breakpoints.down("md")]:{
            display:"none"
        },
    }));

    const NavBarLink = styled(Typography)(({theme})=>({
        fontSize:"15px",
        color:"#4F5361",
        fontWeight:'bold',
        cursor:'pointer',
        '&:hover':{
            color:'#fff'
            
        }
    }));

    const NavBarLogo = styled("img")(({theme})=>({
      cursor:'pointer',
    [theme.breakpoints.down("md")]:{
      display:'none',
    },
      
  }));

  const CustomMenuIcon = styled(MenuIcon)(({theme})=>({
    cursor:'pointer',
    display:"none",
    marginRight:theme.spacing(2),
  [theme.breakpoints.down("md")]:{
    display:'block',

  },
    
}));
  return (
 <Box
 sx={{
  display:"flex",
  alignItems:"center",
  justifyContent:"space-between",
  padding:"40px",
  maxWidth:"auto",
  backgroundColor:"#FED801",
  marginLeft:"0px",
  marginBottom:"-24px"

 }}
 >
    <Box
     sx={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      gap:"2.5rem"
     }}
    >
      <Box
        sx={{
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          gap:"2.5rem"
         }}
      >
        <Box
          sx={{
            display:"flex",
            alignItems:"center"
           }}
           >


            <CustomMenuIcon onClick={toogleDrawer("left",true)}/>
            <Drawer
            anchor="left"
            open={MobileMenu["left"]}
            onClose={toogleDrawer("left",false)}
            >
           {list("left")}

            </Drawer>
            <NavBarLogo src={logoImg} alt="logo" />
           
        </Box>
        <NavBarLinkBox>
        {
          nav_titles.map((item,index)=>(
            <NavBarLink variant="body2" onClick={()=>navigate(item.path)}>
                {item.display}
            </NavBarLink>
          ))
        }
      </NavBarLinkBox>
        </Box>  
    </Box>
    <Box
      sx={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:"2.5rem"
       }}
    >
         <NavBarLink variant="body2">
               Sign Up
         </NavBarLink>
         <CustomButton
         backgroundColor="#0F1B4C"
         color='#fff'
         buttonText="Register"
        
         />


    </Box>

 </Box>
  )
}

export default Header