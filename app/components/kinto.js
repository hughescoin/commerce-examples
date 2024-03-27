import { destWallets } from '../../constants';
import { initOnRamp } from '@coinbase/cbpay-js';
import { useRef, useState, useEffect } from 'react';

export default function KintoPayButton() {
  const [isReady, setIsReady] = useState(false);
  const onrampInstance = useRef(undefined);

  useEffect(() => {
    const options = {
      appId: 'b73fc90c-f160-407e-ab0c-f40ae18aab37',
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
      if (instance) {
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
