import {Box,} from "@mui/material";
import Tabs from "../../components/UI/Tabs";

const Main = () => {


  return (
    <Box
        component={'section'}
        sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            flexGrow: 1,
            alignSelf: 'center',
            width: '100%',
        }}
    >
      <Tabs />
    </Box>
  )
};

export default Main;
