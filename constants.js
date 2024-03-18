export const ikbWallets = [
  {
    address: process.env.EVM_ADDR_1,
    assets: ['usdc'],
    blockchains: ['base'],
    supportedNetworks: ['base'],
  },
];

export const destWallets = [
  {
    address: process.env.NEXT_PUBLIC_EVM_ADDR_1,
    //blockchains: ['ethereum', 'avalanche-c-chain'], //ethereum, avalanche-c-chain, solana today
    assets: ['ETH', 'USDC', 'MATIC'], //can also limit to specific asset
    blockchains: ['polygon'],
  },
];

export const generateOnRampConfig = {
  appId: process.env.NEXT_PUBLIC_APP_ID,
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
