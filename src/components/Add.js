import React, { useState } from 'react';
import { Avatar, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material';
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';
import { Box } from '@mui/system';

const StyledModal=styled(Modal)({
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
})

const Userbox=styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px"
})

function Add() {
    const [open,setOpen]=useState(false);
  return (
    <>
        <Tooltip
         onClick={e=>setOpen(true)}
         title="Add"
         sx={{position:"fixed",bottom:20,left:{xs:"calc(50% - 25px)",md:30}}}>
            <Fab color="primary" aria-label="add">
                <AddIcon/>
            </Fab>
        </Tooltip>
        <StyledModal
            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} height={280} 
             p={3} borderRadius={5}
             bgcolor={"background.default"} color={"text.primary"}
             > 
                <Typography variant="h6" color="gray" textAlign="center">
                Create Post
                </Typography>

                <Userbox>
                    <Avatar sx={{width:"30px",height:"30px"}} src="https://mui.com/static/images/avatar/1.jpg" />
                    <Typography variant="span" fontWeight={500}>Ansari Aasif</Typography>
                </Userbox>
                <TextField sx={{width:"100%",marginTop:"10px",marginBottom:"10px"}}                     
                    multiline
                    rows={3}                    
                    placeholder="Whats on Your mind ?"
                    variant="standard"
                />
                <Stack direction="row" gap={2} mb={2}>
                    <EmojiEmotions color="primary"/>
                    <Image color="secondary"/>
                    <VideoCameraBack color="success"/>
                    <PersonAdd color="error"/>
                </Stack>
                <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                    <Button>Post</Button>
                    <Button sx={{width:"100px"}}><DateRange/></Button>                    
                </ButtonGroup>
            </Box>
        </StyledModal>
    </>
  )
}

export default Add