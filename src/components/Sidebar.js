import { Home,TextSnippet,Group,Storefront,Person,AccountCircle,Settings,ModeNight
} from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

function Sidebar({mode,setMode}) {
  return (
    <Box  flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>
      <Box position="fixed"> 

         <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <Home/>
                </ListItemIcon>
                <ListItemText primary="Home Page" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#pages">
                <ListItemIcon>
                  <TextSnippet/>
                </ListItemIcon>
                <ListItemText primary="Pages" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#groups">
                <ListItemIcon>
                  <Group/>
                </ListItemIcon>
                <ListItemText primary="Groups" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#marketplace">
                <ListItemIcon>
                  <Storefront/>
                </ListItemIcon>
                <ListItemText primary="MarketPlace" />
              </ListItemButton>
            </ListItem>
           
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <Person/>
                </ListItemIcon>
                <ListItemText primary="Friends" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <Settings/>
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <AccountCircle/>
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <ModeNight/>
                </ListItemIcon>
                <Switch onChange={e=>setMode(mode==="light" ? "dark":"light")}/>
              </ListItemButton>
            </ListItem>
          </List> 
      </Box>
    </Box>
  )
}

export default Sidebar