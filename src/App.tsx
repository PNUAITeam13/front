import {Box} from "@mui/material";
import {useEffect, useState} from "react";
import useAsyncWrapper from "./hooks/useAsyncWrapper";
import Router from "./components/Wrappers/RouterWrapper";
import {useAclchoStore} from "./store/alchoStore";
import {useMessageStore} from "./store/store";

function App() {


  const currentTab = useMessageStore(state => state.currentTab);
  const setCurrentTab = useMessageStore(state => state.setCurrentTab);
  const getAlchoModelDetails = useAclchoStore(state => state.getAlchoModelDetails);
  const getMobileModelDetails = useAclchoStore(state => state.getMobileModelDetails);
  const getCsgoModelDetails = useAclchoStore(state => state.getCsgoModelDetails);


  const getAlchoModelDetailsHandler = useAsyncWrapper(getAlchoModelDetails);
  const getMobileModelDetailsHandler = useAsyncWrapper(getMobileModelDetails);
  const getCsgoModelDetailsHandler = useAsyncWrapper(getCsgoModelDetails);

  useEffect(() => {
    (async () => {

      if(currentTab === 'alcho') {
        const {data} = await getAlchoModelDetailsHandler();

        return
      } else if(currentTab === 'cs-go') {
        const {data} = await getCsgoModelDetailsHandler();

        return
      } else if(currentTab === 'mobile') {
        const {data} = await getMobileModelDetailsHandler();

        return
      } else if(currentTab === 'etc') {
        const {data} = await getAlchoModelDetailsHandler();

        return
      }

    })()


  },[currentTab])

  useEffect(() => {
    const item = localStorage.getItem('currentTab');
    if(item) {
      setCurrentTab(item)
    }
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
        <Router />
    </Box>
  );
}

export default App;
