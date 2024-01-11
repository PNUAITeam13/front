import {Box, Tab} from "@mui/material";
import {useMessageStore} from "../../../store/store";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import React from "react";
import Form from "../../Tables";

const Tabs = () => {

  const tab = useMessageStore(state => state.currentTab);
  const setTab = useMessageStore(state => state.setCurrentTab);


  const handleChange = (e: any, val: any) => {
    setTab(val)
  }


  return <Box>
    <TabContext value={tab}>
      <TabList onChange={handleChange} variant="fullWidth">
        <Tab label="AlcoholConsumption" value="alcho" />
        <Tab label="CS-GO_Round_Winner_Clustering" value="cs-go" />
        <Tab label="Mobile-Pricing" value="mobile" />
      </TabList>


      <TabPanel value="alcho">
        <Form/>
      </TabPanel>
      <TabPanel value="cs-go">

      </TabPanel>
      <TabPanel value="mobile">

      </TabPanel>
    </TabContext>

  </Box>
}

export default Tabs