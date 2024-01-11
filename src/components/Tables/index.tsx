import {
  Autocomplete,
  Box, Button, FormControlLabel, MenuItem, Select,
  Switch,
  TextField,
  Typography
} from "@mui/material";
import React, {useState} from "react";
import {heading} from "../../constants";

const Form = () => {
  const [formData, setFormData] = useState<any>({})

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleChangeSelect = (val: any[], field: string) => {
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

  console.log(formData)

  return <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '40vh',
    minWidth: '500px',
    maxHeight: 'calc(100vh - 100px)',
    overflowY: 'auto'
  }}>
    <Typography variant={'h4'}>
      Form
    </Typography>
    {heading?.map((item, index) => {
      if (item.type === 'multi_select') {
        return (
          <Autocomplete
            multiple
            key={item?.name}
            options={item?.options || []}
            getOptionLabel={(option) => option}
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
    <Button
      variant="contained"
      color={'error'}
    >
      Submit
    </Button>

  </Box>
}

export default Form