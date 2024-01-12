import React, {useState} from "react";
import {Box, Dialog, DialogContent, DialogTitle} from "@mui/material";
import {Close} from "@mui/icons-material";


const Modal = () => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }


  return <Dialog
    open={open}
    onClose={handleClose}
    fullScreen
    sx={{
      '& .MuiBackdrop-root': {
        backgroundColor: 'rgba(0,0,0,0.1)' // Try to remove this to see the result
      },
      '& .MuiPaper-root': {
        width: '100%'
      }

    }}
  >
    <DialogTitle sx={{
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 600,
      color:'#373737',
      borderBottom: '2px solid #373737',
      marginBottom: '20px',
    }}>
      Results
      <Box onClick={handleClose}>
        <Close />
      </Box>
    </DialogTitle>


    <DialogContent sx={{
      padding: '0px 5px',
    }}>

    </DialogContent>
  </Dialog>
}

export default Modal