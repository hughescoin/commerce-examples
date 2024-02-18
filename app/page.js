import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Home() {
  return (
    <>
      <Box>
        {/* <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label='Charges'
          />
          <FormControlLabel label='Checkouts' />
        </FormGroup> */}
        <div>
          <TextField
            required
            id='outlined-required'
            label='First Name'
            defaultValue='Hello World'
            color='success'
          />
          <TextField
            required
            id='outlined-required'
            label='Last Name'
            defaultValue='Hello World'
            color='success'
          />
          <TextField
            required
            id='outlined-required'
            label='e-mail'
            defaultValue='Hello World'
            color='success'
          />
          <TextField
            required
            id='outlined-required'
            label='Street address'
            defaultValue='Hello World'
            color='success'
          />
          <TextField
            required
            id='outlined-required'
            label='Street address'
            defaultValue='Hello World'
            color='success'
            type='number'
          />
          <TextField
            required
            id='outlined-required'
            label='Phone number'
            defaultValue='Hello World'
            color='success'
            type='tel'
          />
          <TextField
            id='outlined-disabled'
            label='Disabled'
            type='text'
            defaultValue='Hello World'
            color='success'
          />
          <TextField
            id='outlined-password-input'
            label='Password'
            type='text'
            autoComplete='current-password'
            color='success'
          />
        </div>
        <Button variant='contained'>Hello world</Button>
      </Box>
    </>
  );
}
