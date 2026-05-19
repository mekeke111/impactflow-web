export function useWallet() {
  return {
    connected: false,
    connect: async () => {
      return Promise.resolve();
    },
    disconnect: async () => {
      return Promise.resolve();
    },
  };
}
