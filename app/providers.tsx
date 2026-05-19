'use client';

import type { PropsWithChildren } from 'react';
import { WalletProvider, NetworkType } from 'stellar-wallet-kit';

export function Providers({ children }: PropsWithChildren<{}>) {
  return (
    <WalletProvider
      config={{
        network: NetworkType.TESTNET,
        autoConnect: true,
        appName: 'ImpactFlow Web',
      }}
    >
      {children}
    </WalletProvider>
  );
}
