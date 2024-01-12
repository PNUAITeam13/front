import {Backdrop, Box, CircularProgress, Tab} from "@mui/material";
import {useMessageStore} from "../../../store/store";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import React from "react";
import Form from "../../Tables";
import {useAclchoStore} from "../../../store/alchoStore";
import Modal from "../Modal/indes";

const Tabs = () => {

  const tab = useMessageStore(state => state.currentTab);
  const setTab = useMessageStore(state => state.setCurrentTab);

  const loading = useAclchoStore(state => state.loading);

  const handleChange = (e: any, val: any) => {
    setTab(val)
    localStorage.setItem('currentTab', val)
  }


  return <Box>
    <TabContext value={tab}>
      <TabList
        sx={{
          '& .Mui-selected': {
            color: '#fff!important',
            background: '#d32f2f',
          }
        }}
        TabIndicatorProps={{style: {background:'#000'}}}
        onChange={handleChange} variant="fullWidth">
        <Tab
          label="AlcoholConsumption" value="alcho"
        />
        <Tab
          label="CS-GO_Round_Winner_Clustering"
          value="cs-go" />
        <Tab label="Mobile-Pricing" value="mobile" />
        <Tab label="Mobile-Pricing" value="etc" />
      </TabList>

      {loading ? <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
         open={true}>
        <CircularProgress color="inherit" />
      </Backdrop> : <>
        <TabPanel value="alcho">
          <Form/>
        </TabPanel>
        <TabPanel value="cs-go">
          <Form/>
        </TabPanel>
        <TabPanel value="mobile">
          <Form/>
        </TabPanel>
        <TabPanel value="etc">
          <Form/>
        </TabPanel>
      </>}

    </TabContext>
    <Modal />
  </Box>
}

export default Tabs