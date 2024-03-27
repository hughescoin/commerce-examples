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
        {/* <h2>initOnRamp (mine)</h2>
        <a id='cbpay-button-container'>
          <InitOnRampButton />
        </a> */}
        <h2>Kinto</h2>
        <a id='cbpay-container'>
          <KintoPayButton />
        </a>
      </div>
    </>
  );
}

{
  /* 

import { destWallets } from '../../constants';
import { initOnRamp } from '@coinbase/cbpay-js';
import { useRef, useState, useEffect } from 'react';

export default function KintoPayButton() {
  const [isReady, setIsReady] = useState(false);
  const onrampInstance = useRef(undefined);

  useEffect(() => {
    const options = {
      appId: 'REPLACE',
      target: '#cbpay-container',
      widgetParameters: {
        presetFiatAmount: 1000,
        defaultExperience: 'buy',
        destinationWallets: destWallets,
      },
      onSuccess: () => {},
      onExit: () => {},
      onEvent: (event) => {
        // event stream
      },
      experienceLoggedIn: 'popup',
      experienceLoggedOut: 'popup',
    };

    if (onrampInstance.current) {
      onrampInstance.current.destroy();
    }

    initOnRamp(options, (error, instance) => {
      if (instance && onrampInstance.current) {
        onrampInstance.current = instance;
        setIsReady(true);
      }
    });
  }, []);

  const handleOnPress = () => {
    if (onrampInstance.current) {
      onrampInstance.current.open();
    }
  };

  return (
    <div id='cbpay-container'>
      <button onClick={handleOnPress} disabled={!isReady}>
        Pay with Coinbase
      </button>
    </div>
  );
}


*/
}
