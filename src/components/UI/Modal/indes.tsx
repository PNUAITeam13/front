import React, {useEffect, useState} from "react";
import {Box, Dialog, DialogContent, DialogTitle, IconButton, Typography} from "@mui/material";
import {Close} from "@mui/icons-material";
import {useAclchoStore} from "../../../store/alchoStore";
import GetAppIcon from '@mui/icons-material/GetApp';

const Modal = () => {
  const [open, setOpen] = useState(false)

  const data = useAclchoStore(state => state.data)

  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };


  useEffect(() => {
    if (data.length > 0) {
      handleOpen()
    }
  },[data])


  return <Dialog
    open={open}
    onClose={handleClose}
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
      alignItems: 'center',
      fontWeight: 600,
      color:'#373737',
      borderBottom: '2px solid #373737',
    }}>
      <Typography variant="h6">
        Results <IconButton
         onClick={exportData}
      >
        <GetAppIcon
        />

      </IconButton>
      </Typography>
      <Box onClick={handleClose}>
        <Close />
      </Box>
    </DialogTitle>


    <DialogContent sx={{
      padding: '0',
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
    }}>
      <Box sx={{
        display: 'flex',
        gap: '25px',
        background: 'rgb(36, 37, 49)',
        padding: '10px',
        borderRadius: '0 0 8px 8px',
      }}>
        <Box
          sx={{
            width: '35%',
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#fff',
          }}
        >
          Index
        </Box>
        <Box sx={{
          fontWeight: 'bold',
          fontSize: '16px',
          color: '#fff',
        }}>
          Value
        </Box>
      </Box>


      <Box sx={{
        maxHeight: '70vh',
        padding: '0',
        overflowY: 'auto',
      }}>
        {data?.slice(0, 1000)?.map((item) => <Box key={item?.index} sx={{
          display: 'flex',
          gap: '25px',
          padding: '10px',
          background: item?.index % 2 ? 'transparent' : '#ccc',
        }}>

          <Box
            sx={{
              width: '35%',
              fontSize: '16px',
            }}
          >
            {item?.index}
          </Box>
          <Box sx={{
            fontSize: '16px',
          }}>
            {item["0"] ?? item["values"]}
          </Box>
        </Box>)}

      </Box>


    </DialogContent>
  </Dialog>
}

export default Modal