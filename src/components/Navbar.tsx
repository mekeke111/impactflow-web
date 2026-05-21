'use client';

import Link from 'next/link';
import { ConnectButton, useWallet } from 'stellar-wallet-kit';

export default function Navbar() {
  const { account } = useWallet();

  return (
    <nav className="w-full flex flex-wrap items-center justify-between px-8 py-5 bg-black text-white border-b border-gray-800">
      <div className="flex flex-wrap items-center gap-6">
        <h1 className="text-2xl font-bold text-blue-500">ImpactFlow</h1>

        <Link href="/">Home</Link>
        <Link href="/campaigns">Campaigns</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/governance">Governance</Link>
        <Link href="/beneficiaries">Beneficiaries</Link>
        <Link href="/analytics">Analytics</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {account?.address ? (
          <span className="text-sm text-green-300">Connected: {account.address}</span>
        ) : null}

        <ConnectButton
          label="Connect Wallet"
          className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl"
        />
      </div>
    </nav>
  );
}
