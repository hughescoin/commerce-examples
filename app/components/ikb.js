import { initOnRamp } from '@coinbase/cbpay-js';
import Image from 'next/image';
import compactBuyButton from '../../public/compactBuy.png';
import { initOnRampConfig } from '../../constants';
import { useMemo, useRef, useState, useEffect } from 'react';
import { ikbWallets } from '../../constants';

export default function IKB() {
  const [isReady, setIsReady] = useState(false);
  const onrampInstance = useRef();

  const widgetOptions = useMemo(
    () => ({
      appId: process.env.NEXT_PUBLIC_APP_ID,
      defaultNetwork: 'base',
      target: '#cbpay-container',
      widgetParameters: {
        destinationWallets: ikbWallets,
        defaultExperience: 'buy',
      },
      onSuccess: () => console.log('success'),
      onExit: (event) => console.log('exit', event),
      onEvent: async (event) => {
        console.log('COINBASE EVENT => ', event);
        console.log('onEvent ', event);
      },
      experienceLoggedIn: 'embedded',
      experienceLoggedOut: 'embedded',
      closeOnExit: true,
      closeOnSuccess: true,
    }),
    []
  );

  useEffect(() => {
    initOnRamp(widgetOptions, (error, instance) => {
      if (instance) {
        onrampInstance.current = instance;
        setIsReady(true);
      }
    });
  }, [widgetOptions]);

  const handleClick = () => {
    onrampInstance.current?.open();
  };

  return (
    <button onClick={handleClick} disabled={!isReady}>
      <Image src={compactBuyButton} alt='buy button' />
    </button>
  );
}
