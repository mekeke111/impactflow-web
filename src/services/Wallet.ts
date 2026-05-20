import { StellarWalletsKit } from "@creit-tech/stellar-wallets-kit";

import { defaultModules } from "@creit-tech/stellar-wallets-kit/modules/utils";

StellarWalletsKit.init({
  modules: defaultModules(),
});

export default StellarWalletsKit;