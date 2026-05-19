type AppState = {
  walletConnected: boolean;
  activeFeature: string;
};

const state: AppState = {
  walletConnected: false,
  activeFeature: "dashboard",
};

export function useAppStore() {
  return {
    state,
    setActiveFeature: (feature: string) => {
      state.activeFeature = feature;
    },
  };
}
