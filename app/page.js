'use client';
//import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';

import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { InjectedConnector } from '@web3-react/injected-connector';
import GenerateOnRampButton from './components/pay-button';
import InitOnRampButton from './components/init';
import IKB from './components/ikb-init';

const CoinbaseWallet = new WalletLinkConnector({
  url: `${process.env.ALCHEMY_BASE_MAINNET}`,
  appName: 'phcbsa',
  supportedChainIds: [1, 3, 4, 5, 42],
});

const WalletConnect = new WalletConnectConnector({
  rpcUrl: `${process.env.ALCHEMY_BASE_MAINNET}`,
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
});

const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

export default function Home() {
  // const { library, chainId, account, activate, deactivate, active } =
  //   useWeb3React();
  // const [signature, setSignature] = useState('');
  // const [error, setError] = useState('');
  // const [network, setNetwork] = useState(undefined);
  // const [message, setMessage] = useState('');
  // const [signedMessage, setSignedMessage] = useState('');
  // const [verified, setVerified] = useState();

  // const handleNetwork = (e) => {
  //   const id = e.target.value;
  //   setNetwork(Number(id));
  // };

  // const handleInput = (e) => {
  //   const msg = e.target.value;
  //   setMessage(msg);
  // };

  // const switchNetwork = async () => {
  //   try {
  //     await library.provider.request({
  //       method: 'wallet_switchEthereumChain',
  //       params: [{ chainId: toHex(network) }],
  //     });
  //   } catch (switchError) {
  //     if (switchError.code === 4902) {
  //       try {
  //         await library.provider.request({
  //           method: 'wallet_addEthereumChain',
  //           params: [networkParams[toHex(network)]],
  //         });
  //       } catch (error) {
  //         setError(error);
  //       }
  //     }
  //   }
  // };

  // const signMessage = async () => {
  //   if (!library) return;
  //   try {
  //     const signature = await library.provider.request({
  //       method: 'personal_sign',
  //       params: [message, account],
  //     });
  //     setSignedMessage(message);
  //     setSignature(signature);
  //   } catch (error) {
  //     setError(error);
  //   }
  // };

  // const verifyMessage = async () => {
  //   if (!library) return;
  //   try {
  //     const verify = await library.provider.request({
  //       method: 'personal_ecRecover',
  //       params: [signedMessage, signature],
  //     });
  //     setVerified(verify === account.toLowerCase());
  //   } catch (error) {
  //     setError(error);
  //   }
  // };

  // const refreshState = () => {
  //   window.localStorage.setItem('provider', undefined);
  //   setNetwork('');
  //   setMessage('');
  //   setSignature('');
  //   setVerified(undefined);
  // };

  // const disconnect = () => {
  //   refreshState();
  //   deactivate();
  // };

  // useEffect(() => {
  //   const provider = window.localStorage.getItem('provider');
  //   if (provider) activate(connectors[provider]);
  // }, []);

  return (
    <>
      <div>
        <h2>GenerateOnRamp</h2>
        <GenerateOnRampButton />
        <h2>initOnRamp</h2>
        <a id='"cbpay-button-container'>
          <InitOnRampButton />
        </a>
        <h2>IKB</h2>
        <a id='"cbpay-button-container'>
          <IKB />
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
