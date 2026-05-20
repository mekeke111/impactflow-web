'use client';

import Link from 'next/link';
import StellarWalletsKit from '../services/Wallet';

export default function Navbar() {

  const connectWallet = async () => {

    try {

      await StellarWalletsKit.openModal();

      const { address } = await StellarWalletsKit.getAddress();

      alert(`Connected Wallet: ${address}`);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="w-full flex items-center justify-between px-8 py-5 bg-black text-white border-b border-gray-800">

      <h1 className="text-2xl font-bold text-blue-500">
        ImpactFlow
      </h1>

      <div className="flex gap-6 flex-wrap">

        <Link href="/">Home</Link>

        <Link href="/campaigns">
          Campaigns
        </Link>

        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/governance">
          Governance
        </Link>

        <Link href="/beneficiaries">
          Beneficiaries
        </Link>

        <Link href="/analytics">
          Analytics
        </Link>

        <Link href="/contact">
          Contact
        </Link>

        <Link href="/about">
          About
        </Link>

      </div>

      <button
        onClick={connectWallet}
        className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl"
      >
        Connect Wallet
      </button>

    </nav>
  );
}