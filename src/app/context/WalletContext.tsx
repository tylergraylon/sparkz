"use client";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { project_id } from "../../../utils/config";
import { phantomWallet, trustWallet } from "@rainbow-me/rainbowkit/wallets";

export default function WalletContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const { chains, publicClient } = configureChains(
    [mainnet],
    [publicProvider()]
  );
  const { wallets } = getDefaultWallets({
    appName: "SparkzStore",
    projectId: project_id,
    chains,
  });

  const connectors = connectorsForWallets([
    ...wallets,
    {
      groupName: "Others",
      wallets: [
        phantomWallet({ chains }),
        trustWallet({ chains, projectId: project_id }),
      ],
    },
  ]);

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        theme={darkTheme()}
        modalSize="compact"
        chains={chains}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
