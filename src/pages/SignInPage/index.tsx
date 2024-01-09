import {Box,} from "@mui/material";

const SignInPage = () => {
  // const { t } = useTranslation()
  // const nav = useNavigate()
  //
  // // const user = useUserStore(state => state.user)
  //
  // useEffect(() => {
  //   if(user) {
  //     // nav(RouteUrls.PROJECTS)
  //   }
  // },[user])
  return (
    <Box
        component={'section'}
        sx={{
            padding: '20px 20px',
            height: '100%',
            width: 'fit-content',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            justifyContent: 'center',
            flexGrow: 1,
            alignSelf: 'center',
        }}
    >

    </Box>
  )
};

export default SignInPage;
