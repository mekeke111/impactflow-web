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
