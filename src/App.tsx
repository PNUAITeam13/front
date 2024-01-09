import {Box} from "@mui/material";

function App() {

  // const { errorToast, successToast } = useToast()
  //
  // let [searchParams] = useSearchParams();
  // const [loading, setLoading] = useState(true);
  //
  // const getProfile = useUserStore(state => state.getProfile);
  //
  // const getProfileHandler = useAsyncWrapper(getProfile);
  //
  // useEffect(() => {
  //   (async () => {
  //     const {data} = await getProfileHandler();
  //
  //
  //     setLoading(false)
  //   })()
  //
  //
  // },[])



  return (
    <Box component={'main'}
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/*{*/}
      {/*  loading ? <Preloader /> : <Router />*/}
      {/*}*/}
    </Box>
  );
}

export default App;
