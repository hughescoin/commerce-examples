import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
} from '@mui/material/Button';

export default function Home() {
  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <div>
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label='Charges'
          />
          <FormControlLabel label='Checkouts' />
        </FormGroup>
      </div>
      <div>
        <TextField
          required
          id='outlined-required'
          label='Required'
          defaultValue='Hello World'
        />
        <TextField
          disabled
          id='outlined-disabled'
          label='Disabled'
          defaultValue='Hello World'
        />
        <TextField
          id='outlined-password-input'
          label='Password'
          type='password'
          autoComplete='current-password'
        />
      </div>
      <Button variant='contained'>Hello world</Button>;
    </Box>
  );
}
