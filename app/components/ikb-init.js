import { initOnRamp } from '@coinbase/cbpay-js';
import Image from 'next/image';
import compactBuyButton from '../../public/compactBuy.png';
import { initOnRampConfig } from '../../constants';
import { useMemo, useRef, useState } from 'react';
import { destWallets } from '../../constants';

export default function IKB() {
  const [isReady, setIsReady] = useState(false);
  const amount = 10;
  const userId = 796;
  const onrampInstance = useRef(); //reference a value not needed for rendering //access DOM nodes inside components

  const widgetOptions = useMemo(() => {
    return {
      appId: process.env.NEXT_PUBLIC_APP_ID,
      target: '#cbpay-container',
      widgetParameters: {
        destinationWallets: [
          {
            address: destWallets,
            assets: ['usdc'],
            blockchains: ['base'],
            supportedNetworks: ['base'],
          },
        ],
        presetCryptoAmount: amount,
        partnerUserId: userId,
        defaultExperience: 'buy',
      },
      onSuccess: () => {
        console.log('success');
      },
      onExit: (event) => {
        console.log('exit', event);
      },
      onEvent: async (event) => {
        console.log('COINBASE EVENT => ', event);
        if (event.eventName === 'open') {
          // await buyCrypto("started")
        }
        if (event.eventName === 'success') {
          // await buyCrypto("success")
        }
        console.log('onEvent ', event);
        // event stream
      },
      experienceLoggedIn: 'embedded',
      experienceLoggedOut: 'embedded',
      closeOnExit: true,
      closeOnSuccess: true,
    };
  }, [destWallets, amount]);

  // init
  initOnRamp(widgetOptions, (error, instance) => {
    console.log('error ', error);
    if (instance) {
      onrampInstance.current = instance;
      setIsReady(true);

      onrampInstance.current.open();
    }
  });
}
