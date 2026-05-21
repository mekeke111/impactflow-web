'use client';

import { WalletProvider } from 'stellar-wallet-kit';

export default function WalletProviderWrapper({ children }: { children: React.ReactNode }) {
  return <WalletProvider>{children}</WalletProvider>;
}
