'use client';
//import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';

import GenerateOnRampButton from './components/pay-button';
import InitOnRampButton from './components/init';
import KintoPayButton from './components/kinto';

export default function Home() {
  return (
    <>
      <div>
        <h2>GenerateOnRamp</h2>
        <GenerateOnRampButton />
        <h2>initOnRamp</h2>
        <a id='cbpay-button-container'>
          <InitOnRampButton />
        </a>
        <h2>Kinto</h2>
        <a id='cbpay-container'>
          <KintoPayButton />
        </a>
      </div>
      <Box sx={{ pt: 4, pl: 4 }} className='border border-green-950	'>
        {/*{ flexGrow: 1 } */}
        <Grid container space={2}>
          <Grid item xs={6} className='border border-red-500'>
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
              defaultValue='212-212-1232'
              color='success'
              type='tel'
            />
          </Grid>
        </Grid>
        <Button
          sx={{ bgcolor: '#1976d2', mt: 2 }}
          variant='contained'
          endIcon={<SendIcon />}
        >
          Create charge
        </Button>
      </Box>
    </>
  );
}
