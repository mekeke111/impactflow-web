$wrapper = @'
'use client';

import { WalletProvider } from 'stellar-wallet-kit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 10000,
      staleTime: 30000,
      retry: false,
    },
  },
});

export default function WalletProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WalletProvider>{children}</WalletProvider>
    </QueryClientProvider>
  );
}
'@
Set-Content -LiteralPath 'src\components\WalletProviderWrapper.tsx' -Value $wrapper -Encoding utf8

$mock = @'
export type DashboardMetrics = {
  totalDonations: number;
  activeCampaigns: number;
  verifiedBeneficiaries: number;
  proposals: number;
  recentUpdates: string[];
};

export async function fetchDashboardMetrics(): Promise<DashboardMetrics> {
  await new Promise((resolve) => setTimeout(resolve, 150));

  const totalDonations = 25000 + Math.floor(Math.random() * 4000);
  const activeCampaigns = 12 + Math.floor(Math.random() * 4);
  const verifiedBeneficiaries = 210 + Math.floor(Math.random() * 30);

  return {
    totalDonations,
    activeCampaigns,
    verifiedBeneficiaries,
    proposals: 2,
    recentUpdates: [
      `Campaign funding increased to $${totalDonations.toLocaleString()} total.`,
      `${activeCampaigns} campaigns are actively receiving support.`,
      `${verifiedBeneficiaries} beneficiaries verified in the community network.`,
    ],
  };
}

export async function fetchAnalyticsActivity(): Promise<string[]> {
  await new Promise((resolve) => setTimeout(resolve, 150));

  return [
    'Campaign "Clean Water Project" reached 80% funding.',
    '25 new beneficiaries were verified this week.',
    'DAO Proposal #2 received majority approval.',
  ];
}
'@
Set-Content -LiteralPath 'src\services\mockData.ts' -Value $mock -Encoding utf8
