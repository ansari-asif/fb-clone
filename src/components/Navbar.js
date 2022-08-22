import { AppBar, styled, Toolbar, Typography,Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import {Facebook, Mail, Notifications} from "@mui/icons-material";
import React, { useState } from 'react';
//import Theme from "../Theme";
const StyleToolbar=styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
})
const Search=styled("div") ({
  backgroundColor:"white",
  borderRadius:"7px",
  padding:"0 10px",
  width:"40%",
})


const Icons=styled(Box)({
  
  gap:"20px",
  alignItems:"center"

})
const Userbox=styled(Box)({
  
  gap:"10px",
  alignItems:"center"

})
function Navbar() {
  const [open,setOpen]=useState(false);
  return (
   <AppBar position="sticky">
      <StyleToolbar>
        <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}> FB Clone</Typography>
        <Facebook sx={{display:{xs:"block",sm:"none"}}}/>
        <Search ><InputBase placeholder="search..."/>
        </Search>
        <Icons sx={{display:{xs:"none",sm:"flex"}}}>
            <Badge badgeContent={4} color="error">
              <Mail/>
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications/>
            </Badge>
            <Avatar sx={{width:"30px",height:"30px"}} onClick={e=>setOpen(true)}/>
        </Icons>
        <Userbox  sx={{display:{xs:"flex",sm:"none"}}}>
          <Typography variant="span">Ansari Aasif</Typography>
          <Avatar sx={{width:"30px",height:"30px"}} onClick={e=>setOpen(true)}/>
        </Userbox>
        
      </StyleToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"      
        open={open} 
        onClose={e=>setOpen(false)}       
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={e=>setOpen(false)}>Profile</MenuItem>
        <MenuItem onClick={e=>setOpen(false)}>My account</MenuItem>
        <MenuItem onClick={e=>setOpen(false)}>Logout</MenuItem>
      </Menu>

   </AppBar>
  )
}

export default Navbar