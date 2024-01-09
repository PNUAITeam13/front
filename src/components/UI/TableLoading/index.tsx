import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import React from "react";

const TableLoading = () => {

  return <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={0}
    sx={{
      width: '100%',
      height: '100%'
    }}
  >
    <CircularProgress size={30} />
  </Stack>
}

export default TableLoading