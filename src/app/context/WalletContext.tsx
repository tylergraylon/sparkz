"use client";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { project_id } from "../../../utils/config";

export default function WalletContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const { chains, publicClient } = configureChains(
    [mainnet],
    [publicProvider()]
  );
  const { connectors } = getDefaultWallets({
    appName: "SparkzStore",
    projectId: project_id,
    chains,
  });

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
