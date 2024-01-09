

//
// const initialFormState: ILogin = {
//     login: "",
//     password: "",
// }
// const accessKey = env.REACT_APP_CAPTCHA_KEY ?? ''

const SignIn = () => {
    // const {errorToast, successToast} = useToast();
    // const nav = useNavigate()
    //
    // const [showPassword, setShowPassword] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    // const [captcha, setCaptcha] = useState(false);
    // const [open, setOpen] = useState(false);
    //
    //
    // const login = useUserStore(state => state.login);
    // const getRoles = useGeneralStore(state => state.getRoles);
    // const getPermissions = useGeneralStore(state => state.getPermissions);
    //
    // const loginHandler = useAsyncWrapper(login)
    // const getPermissionsHandler = useAsyncWrapper(getPermissions);
    // const getRolesHandler = useAsyncWrapper(getRoles);
    //
    // const schema = getSignInSchema(t)
    //
    // const {handleSubmit, control } = useForm<ILogin>({
    //     defaultValues: initialFormState,
    //     resolver: yupResolver(schema),
    // });
    //
    // const handleShowPassword = () => {
    //     setShowPassword(!showPassword)
    // }
    //
    // const handleClose = () => {
    //   setOpen(false);
    // }
    //
    // const handleOpen = () => {
    //   setOpen(true);
    // }
    //
    // function onChange(value: any) {
    //   setCaptcha(!!value)
    // }
    //
    //
    // const signInUser = async (body: ILogin) => {
    //     setIsLoading(true)
    //     const {data, error} = await loginHandler( [body] )
    //     setIsLoading(false)
    //
    //     if(!error) {
    //         successToast(t('signIn.success'))
    //         nav(RouteUrls.PROJECTS)
    //         await getPermissionsHandler()
    //         await getRolesHandler()
    //         return;
    //     }
    //     setCaptcha(false)
    //     //@ts-ignore
    //     window.grecaptcha.reset();
    //
    //   if(error?.response?.status === 234) {
    //       errorToast(t('signIn.error.234'))
    //       return;
    //     }
    //     errorToast(t('signIn.error.login'))
    // }


    return (
      <>
        {/*<Box*/}
        {/*    component={'form'}*/}
        {/*    onSubmit={handleSubmit(signInUser)}*/}
        {/*    sx={{*/}
        {/*        maxWidth: '900px',*/}
        {/*        '@media (min-width: 500px)': {*/}
        {/*          minWidth: '500px',*/}
        {/*        }*/}
        {/*    }}*/}
        {/*>*/}
        {/*    <Grid*/}
        {/*        container*/}
        {/*        spacing={1}*/}

        {/*    >*/}

        {/*        <Grid item xs={12} md={12}>*/}
        {/*            <Controller*/}
        {/*                name={"login"}*/}
        {/*                control={control}*/}
        {/*                render={({*/}
        {/*                             fieldState: {error},*/}
        {/*                             field: {onChange, value, name},*/}
        {/*                         }) => (*/}
        {/*                    <StyledFormControlLabel*/}
        {/*                        labelPlacement="top"*/}
        {/*                        sx={{*/}
        {/*                            alignItems: 'flex-start'*/}
        {/*                        }}*/}
        {/*                        label={t("signIn.login")}*/}
        {/*                        control={*/}
        {/*                            <TextField*/}
        {/*                                fullWidth*/}
        {/*                                onChange={onChange}*/}
        {/*                                value={value}*/}
        {/*                                error={error?.ref?.name === name}*/}
        {/*                                helperText={error ? error.message : ' '}*/}
        {/*                            />*/}
        {/*                        }*/}
        {/*                    />*/}
        {/*                )}*/}
        {/*            />*/}
        {/*        </Grid>*/}
        {/*        <Grid item xs={12} md={12}>*/}
        {/*            <Controller*/}
        {/*                name={"password"}*/}
        {/*                control={control}*/}
        {/*                render={({*/}
        {/*                             fieldState: {error},*/}
        {/*                             field: {onChange, value, name},*/}
        {/*                         }) => (*/}
        {/*                    <StyledFormControlLabel*/}
        {/*                        labelPlacement="top"*/}
        {/*                        sx={{*/}
        {/*                            alignItems: 'flex-start',*/}
        {/*                            '& .MuiTypography-root': {*/}
        {/*                              width: '100%'*/}
        {/*                            }*/}
        {/*                        }}*/}
        {/*                        label={*/}
        {/*                        <Box sx={{*/}
        {/*                          display: 'flex',*/}
        {/*                          justifyContent: 'space-between',*/}
        {/*                        }}>*/}
        {/*                          <span>{t("signIn.password")}</span>*/}
        {/*                          <span style={{ fontWeight: 600 }} onClick={handleOpen}>{t('signIn.forgotPassword')}</span>*/}
        {/*                        </Box>}*/}
        {/*                        control={*/}
        {/*                            <TextField*/}
        {/*                                fullWidth*/}
        {/*                                type={showPassword ? "text" : "password"}*/}
        {/*                                onChange={onChange}*/}
        {/*                                value={value}*/}
        {/*                                error={error?.ref?.name === name}*/}
        {/*                                helperText={error ? error.message : ' '}*/}
        {/*                                InputProps={{*/}
        {/*                                  endAdornment: (*/}
        {/*                                    <InputAdornment position="end">*/}
        {/*                                      <IconButton*/}
        {/*                                        aria-label="toggle password visibility"*/}
        {/*                                        onClick={handleShowPassword}*/}
        {/*                                        edge="end"*/}
        {/*                                      >*/}
        {/*                                        {showPassword ? (*/}
        {/*                                          <VisibilityOff sx={{ color: "#666" }} />*/}
        {/*                                        ) : (*/}
        {/*                                          <Visibility sx={{ color: "#666" }} />*/}
        {/*                                        )}*/}
        {/*                                      </IconButton>*/}
        {/*                                    </InputAdornment>*/}
        {/*                                  ),*/}
        {/*                                }}*/}
        {/*                            />*/}
        {/*                        }*/}
        {/*                    />*/}
        {/*                )}*/}
        {/*            />*/}
        {/*        </Grid>*/}
        {/*    </Grid>*/}
        {/*    <ReCAPTCHA*/}
        {/*      sitekey={accessKey}*/}
        {/*      onChange={onChange}*/}
        {/*      style={{ marginBottom: '20px' }}*/}
        {/*    />*/}
        {/*      <ButtonLoadingWrapper isLoading={isLoading}>*/}
        {/*        <Box sx={{*/}
        {/*          display: 'flex',*/}
        {/*          gap: '10px'*/}
        {/*        }}>*/}
        {/*          <Button*/}
        {/*              variant="contained"*/}
        {/*              type="submit"*/}
        {/*              fullWidth*/}
        {/*              size="large"*/}
        {/*              disabled={!captcha}*/}
        {/*              sx={{*/}
        {/*                  background: '#373737',*/}
        {/*                  '&:hover': {*/}
        {/*                    background: '#666',*/}
        {/*                  }*/}
        {/*              }}*/}
        {/*          >*/}

        {/*              {t("signIn.submit")}*/}
        {/*          </Button>*/}
        {/*          <LoginGoogle disabled={!captcha} />*/}
        {/*        </Box>*/}
        {/*      </ButtonLoadingWrapper>*/}
        {/*</Box>*/}
        {/*<ForgotPassword open={open} handleClose={handleClose}/>*/}
      </>
    )
};


export default SignIn;
