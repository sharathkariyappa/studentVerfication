import React from 'react'; 
import { useAccount, useConnect } from 'wagmi';
import { walletConnect } from 'wagmi/connectors'

export default function ConnectButton() {
  const { address, isConnected } = useAccount();
  // const { connect } = useConnect({
  //   connector: new walletConnect({
  //     options: {
  //       qrcode: true,
  //     },
  //   }),
  // });

  return (
    <w3m-button isConnected={isConnected} address={address}/>
    // <button className="connectButton" onClick={() => connect()}>
    //   {isConnected ? `${address.slice(0, 4)}...${address.slice(-4)}` : 'Connect'}
    // </button>
  );
}

// export default function ConnectButton() {
//     return <w3m-button />
//   }