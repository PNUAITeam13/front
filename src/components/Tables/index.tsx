import {
  Autocomplete,
  Box, Button, FormControlLabel, MenuItem, Select,
  Switch,
  TextField,
  Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {heading} from "../../constants";
import {useAclchoStore} from "../../store/alchoStore";
import {useMessageStore} from "../../store/store";
import useAsyncWrapper from "../../hooks/useAsyncWrapper";
import {styled} from "@mui/system";
import useToast from "../../hooks/useToast";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const Form = () => {

  const { errorToast, successToast } = useToast()

  const [formData, setFormData] = useState<any>({})


  const modelFields = useAclchoStore(state => state.modelFields);
  const loadingCreate = useAclchoStore(state => state.loadingCreate);
  const currentTab = useMessageStore(state => state.currentTab);


  const createModelAlchoByFile = useAclchoStore(state => state.createModelAlchoByFile);
  const createModelMobileByFile = useAclchoStore(state => state.createModelMobileByFile);
  const createModelCsgoByFile = useAclchoStore(state => state.createModelCsgoByFile);

  const creteModelAlcho = useAclchoStore(state => state.creteModelAlcho);
  const creteModelMobile = useAclchoStore(state => state.creteModelMobile);
  const creteModelCsgo = useAclchoStore(state => state.creteModelCsgo);


  const creteModelAlchoHandler = useAsyncWrapper(creteModelAlcho);
  const creteModelMobileHandler = useAsyncWrapper(creteModelMobile);
  const creteModelCsgoHandler = useAsyncWrapper(creteModelCsgo);

  const createModelAlchoByFileHandler = useAsyncWrapper(createModelAlchoByFile);
  const createModelMobileByFileHandler = useAsyncWrapper(createModelMobileByFile);
  const createModelCsgoByFileHandler = useAsyncWrapper(createModelCsgoByFile);


  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleChangeSelect = (val: any, field: string) => {
    setFormData({
      ...formData,
      [field]: val
    })
  }
  const handleChangeChecked = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked
    })
  }


  const handleSubmit = async () => {
    let isError = null;

    if(Object.values(formData).some((el: any) => !el?.toString())) {
      errorToast('Error', "Fill all fields")
      return;
    }
    if(currentTab === 'alcho') {
      const {data, error} = await creteModelAlchoHandler([formData]);
      isError = !!error
    } else if(currentTab === 'cs-go') {
      const {data, error} = await creteModelMobileHandler([formData]);
      isError = !!error

    } else if(currentTab === 'mobile') {
      const {data, error} = await creteModelCsgoHandler([formData]);
      isError = !!error

    } else if(currentTab === 'etc') {
      const {data, error} = await creteModelAlchoHandler([formData]);
      isError = !!error

    }
    if(isError) {
      errorToast('Error', "Error while sending data")
      return;
    }
    successToast('Success', "Data sent successfully")
  }

  const handleImport = async (file: any) => {
      let payload = new FormData();
      payload.append('data', file);

      let isError = null;
      if(currentTab === 'alcho') {
        const {data, error} = await createModelAlchoByFileHandler([payload]);
        isError = !!error
      } else if(currentTab === 'cs-go') {
        const {data, error} = await createModelCsgoByFileHandler([payload]);
        isError = !!error

      } else if(currentTab === 'mobile') {
        const {data, error} = await createModelMobileByFileHandler([payload]);
        isError = !!error

      } else if(currentTab === 'etc') {
        const {data, error} = await createModelAlchoByFileHandler([payload]);
        isError = !!error

      }
      if(isError) {
        errorToast('Error', "Error while importing file")
        return;
      }
      successToast('Success', "File imported successfully")
  }

  useEffect(() => {

    const objectInit = modelFields?.reduce((acc, item) => {
      if(item.type === 'multi_select') {
        acc[item?.name] = ''
      }
      if(item.type === 'bool') {
        acc[item?.name] = false
      }
      if(item.type === 'int') {
        acc[item?.name] = 0
      }
      if(item.type === 'str') {
        acc[item?.name] = ''
      }

      return acc
    }, {})
    setFormData(objectInit)
  },[modelFields])

  return <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '60vh',
    minWidth: '500px',
    maxHeight: 'calc(100vh - 100px)',
    margin: '0 auto'
  }}>
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <Typography variant={'h4'}>
        Form
      </Typography>
      <Button  sx={{
            width: '200px'
          }}
          component="label"
          variant="contained"
          color={'success'}
          disabled={loadingCreate}
      >
        Import
        {/*//@ts-ignore*/}
        <VisuallyHiddenInput type="file" onChange={e => handleImport(e.target.files[0])} />
      </Button>
    </Box>
    <Box sx={{
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    }}>
      {modelFields?.map((item, index) => {
        if (item.type === 'multi_select') {
          return (
            <Autocomplete
              key={item?.name}
              options={item?.options || []}
              getOptionLabel={(option) => option as string}
              onChange={(e, val) => handleChangeSelect(val, item?.name)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="filled"
                  name={item?.name}
                  label={item?.displayName}
                />
              )}
            />)
        } else if (item.type === 'bool') {
          return (<FormControlLabel
            sx={{
              alignItems: 'flex-start',
              ml: 0
            }}
            key={item?.name}
            control={<Switch
              onChange={handleChangeChecked}
              name={item?.name}
              checked={formData[item?.name]}
              color="primary"
            />}
            label={item?.displayName}
            labelPlacement="top"
          />)

        }

        return (<TextField
          key={item?.name}
          name={item?.name}
          type={item.type === 'int' ? 'number' : 'text'}
          label={item?.displayName}
          value={formData[item?.name]}
          onChange={handleChange}
          variant="filled"
        />)
      })}
  </Box>
    <Button
      variant="contained"
      color={'error'}
      disabled={loadingCreate}
      onClick={handleSubmit}
    >
      Submit
    </Button>

  </Box>
}

export default Form