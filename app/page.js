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
            label='Required'
            defaultValue='Hello World'
            color='success'
          />
          <TextField
            disabled
            id='outlined-disabled'
            label='Disabled'
            defaultValue='Hello World'
            color='success'
          />
          <TextField
            id='outlined-password-input'
            label='Password'
            type='password'
            autoComplete='current-password'
            color='success'
          />
        </div>
        <Button variant='contained'>Hello world</Button>
      </Box>
    </>
  );
}
