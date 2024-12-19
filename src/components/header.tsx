import React from 'react';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';

function Header() {
  return (
    <header >
        <h1 style={{ margin: 0, color: '#333' }}>Testing OnChain Kit</h1>
      <div>
      <ConnectWallet />
      </div>
     
      
    </header>
  );
}

export default Header;

