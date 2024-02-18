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
        <div>
          <TextField
            required
            id='outlined-required'
            label='First Name'
            defaultValue='Satoshi'
            color='success'
          />
          <TextField
            required
            id='outlined-required'
            label='Last Name'
            defaultValue='Nakamoto'
            color='success'
          />
          <TextField
            required
            id='outlined-required'
            label='e-mail'
            defaultValue='satoshi@bitcoin.com'
            color='success'
          />
          <TextField
            required
            id='outlined-required'
            label='Street address'
            defaultValue='21 Milly Sats Street'
            color='success'
          />
          <TextField
            required
            id='outlined-required'
            label='Zipcode'
            defaultValue='21212'
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
        </div>
        <Button variant='contained'>Hello world</Button>
      </Box>
    </>
  );
}
