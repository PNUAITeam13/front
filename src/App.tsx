import {Box} from "@mui/material";
import {useEffect, useState} from "react";
import useAsyncWrapper from "./hooks/useAsyncWrapper";
import TableLoading from "./components/UI/TableLoading";
import Router from "./components/Wrappers/RouterWrapper";

function App() {

  const [loading, setLoading] = useState(true);


  const getProfileHandler = useAsyncWrapper(async () => {});

  useEffect(() => {
    (async () => {
      const {data} = await getProfileHandler();


      setLoading(false)
    })()


  },[])



  return (
    <Box component={'main'}
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {
        loading ? <TableLoading /> : <Router />
      }
    </Box>
  );
}

export default App;
