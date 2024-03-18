//const appId = '';
//site: https://cb-commerce.uc.r.appspot.com/

export const destWallets = [
  {
    address: process.env.EVM_ADDR_1,
    //blockchains: ['ethereum', 'avalanche-c-chain'], //ethereum, avalanche-c-chain, solana today
    assets: ['ETH', 'USDC', 'MATIC'], //can also limit to specific asset
    blockchains: ['polygon'],
  },
];

export const generateOnRampConfig = {
  appId: 'b73fc90c-f160-407e-ab0c-f40ae18aab37',
  host: 'https://pay.coinbase.com',
  destinationWallets: destWallets,
  defaultNetwork: 'polygon',
  defaultExperience: 'buy',
};

export const initOnRampConfig = {
  appId: process.env.APP_ID,
  experienceLoggedIn: 'popup',
  experienceLoggedOut: 'popup',
  //host: 'https://pay.coinbase.com',
  //target: 'cbpay-button-container',
  // widgetParameters: {
  // 	destinationWallets: destWallets,
  // },
  widgetParameters: {
    destinationWallets: [
      {
        address: process.env.EVM_ADDR_1,
        blockchains: ['polygon', 'ethereum'],
      },
    ],
  },
};
