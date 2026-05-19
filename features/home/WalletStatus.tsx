'use client';

import { ConnectButton, useWallet } from 'stellar-wallet-kit';
import { Button } from '@/components/Button';

export function WalletStatus() {
  const { account, isConnected, disconnect, isConnecting } = useWallet();

  const displayAddress = account?.address
    ? `${account.address.slice(0, 8)}...${account.address.slice(-8)}`
    : null;

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/30">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-cyan-400">Wallet Connection</p>
          <p className="mt-2 text-slate-300">
            {isConnected
              ? `Connected account: ${displayAddress}`
              : 'Connect a Stellar wallet to persist your session across refreshes.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <ConnectButton
            label={isConnected ? 'Manage Wallet' : 'Connect Wallet'}
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          />
          {isConnected ? (
            <Button onClick={() => disconnect()}>
              {isConnecting ? 'Disconnecting…' : 'Disconnect'}
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
