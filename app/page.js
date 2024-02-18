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
        {/* <div>
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label='Charges'
          />
          <FormControlLabel label='Checkouts' />
        </FormGroup>
      </div> */}
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
        <Button variant='contained'>Hello world</Button>
      </Box>
    </>
  );
}
