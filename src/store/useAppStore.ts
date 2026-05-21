import { create } from 'zustand';

export type Campaign = {
  id: number;
  title: string;
  description: string;
  amountRaised: number;
  goal: number;
};

export type Beneficiary = {
  id: number;
  name: string;
  program: string;
  status: string;
};

export type Proposal = {
  id: number;
  title: string;
  description: string;
  yes: number;
  no: number;
};

type AppState = {
  activeFeature: string;
  walletConnected: boolean;
  campaigns: Campaign[];
  beneficiaries: Beneficiary[];
  proposals: Proposal[];
  setActiveFeature: (feature: string) => void;
  setWalletConnected: (connected: boolean) => void;
  addCampaign: (campaign: Omit<Campaign, 'id' | 'amountRaised'>) => void;
  addBeneficiary: (beneficiary: Omit<Beneficiary, 'id' | 'status'>) => void;
  voteProposal: (proposalId: number, support: boolean) => void;
};

export const useAppStore = create<AppState>((set) => ({
  activeFeature: 'dashboard',
  walletConnected: false,
  campaigns: [
    {
      id: 1,
      title: 'Community Park Renovation',
      description: 'Restore the local park with new equipment and green space.',
      amountRaised: 12500,
      goal: 20000,
    },
    {
      id: 2,
      title: 'School Supplies Drive',
      description: 'Provide essentials for students across the region.',
      amountRaised: 8300,
      goal: 12000,
    },
    {
      id: 3,
      title: 'Neighborhood Food Pantry',
      description: 'Fund food supplies for families in need.',
      amountRaised: 14600,
      goal: 18000,
    },
  ],
  beneficiaries: [
    {
      id: 1,
      name: 'Amina Yusuf',
      program: 'Education Support Program',
      status: 'Verified',
    },
    {
      id: 2,
      name: 'David Okoro',
      program: 'Healthcare Assistance Program',
      status: 'Verified',
    },
  ],
  proposals: [
    {
      id: 1,
      title: 'Increase healthcare funding allocation',
      description: 'Expand funding for community healthcare initiatives.',
      yes: 74,
      no: 26,
    },
    {
      id: 2,
      title: 'Expand validator participation requirements',
      description: 'Improve network security by increasing validator standards.',
      yes: 63,
      no: 37,
    },
  ],
  setActiveFeature: (feature) => set({ activeFeature: feature }),
  setWalletConnected: (connected) => set({ walletConnected: connected }),
  addCampaign: (campaign) =>
    set((state) => ({
      campaigns: [
        ...state.campaigns,
        {
          id: state.campaigns.length + 1,
          amountRaised: 0,
          ...campaign,
        },
      ],
    })),
  addBeneficiary: (beneficiary) =>
    set((state) => ({
      beneficiaries: [
        ...state.beneficiaries,
        {
          id: state.beneficiaries.length + 1,
          status: 'Pending',
          ...beneficiary,
        },
      ],
    })),
  voteProposal: (proposalId, support) =>
    set((state) => ({
      proposals: state.proposals.map((proposal) =>
        proposal.id === proposalId
          ? {
              ...proposal,
              yes: support ? proposal.yes + 1 : proposal.yes,
              no: support ? proposal.no : proposal.no + 1,
            }
          : proposal
      ),
    })),
}));
