import { initOnRamp } from '@coinbase/cbpay-js';
import Image from 'next/image';
import compactBuyButton from '../../public/compactBuy.png';
import { initOnRampConfig } from '../../constants';
import { useEffect, useRef, useState } from 'react';

export default function InitOnRampButton() {
  const [isReady, setIsReady] = useState(false);
  const onrampInstance = useRef();

  useEffect(() => {
    onrampInstance.current = initOnRamp(
      {
        ...initOnRampConfig,
        onReady: () => {
          setIsReady(true);
        },
        onSuccess: () => {
          console.log('success');
        },
        onExit: (event) => {
          console.log('exit', event);
        },
        onEvent: (event) => {
          console.log('onEvent', event);
        },
        closeOnExit: true,
        closeOnSuccess: true,
      },
      (_, instance) => {
        onrampInstance.current = instance;
        setIsReady(true);
      }
    );
    return () => {
      onrampInstance.current?.destroy();
    };
  }, []);

  const handleClick = () => {
    onrampInstance.current?.open();
  };

  console.log('initOnramp URL: ', onrampInstance);
  return (
    <button onClick={handleClick} disabled={!isReady}>
      <Image src={compactBuyButton} alt='buy button' />
    </button>
  );
}
