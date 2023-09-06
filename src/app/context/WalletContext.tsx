"use client";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  connectorsForWallets,
  Wallet,
  getWalletConnectConnector,
  Chain,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { project_id } from "../../../utils/config";
import {
  injectedWallet,
  phantomWallet,
  metaMaskWallet,
  ledgerWallet,
  walletConnectWallet,
  coinbaseWallet,
} from "@rainbow-me/rainbowkit/wallets";

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
    {
      groupName: "Wallets",
      wallets: [
        walletConnectWallet({
          chains,
          projectId: project_id,
          options: {
            projectId: project_id,
            qrModalOptions: {
              projectId: project_id,
              mobileLinks: ["https://phantom.app/ul/v1/connect"],
            },
          },
        }),
        metaMaskWallet({ chains, projectId: project_id }),
        ledgerWallet({ chains, projectId: project_id }),
        coinbaseWallet({ appName: "SparkzStore", chains }),
        Phantom({ chains, projectId: project_id }),
        injectedWallet({ chains }),
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

interface MyWalletOptions {
  projectId: string;
  chains: Chain[];
}

const Phantom = ({ chains, projectId }: MyWalletOptions): Wallet => ({
  id: "Phantom",
  name: "Phantom",
  iconUrl: phantomWallet({ chains }).iconUrl,
  iconBackground: phantomWallet({ chains }).iconBackground,
  downloadUrls: {
    ...phantomWallet({ chains }).downloadUrls,
  },
  createConnector: () => {
    const connector = getWalletConnectConnector({ projectId, chains });

    return {
      connector,
      mobile: {
        getUri: async () => {
          const provider = await connector.getProvider();
          const uri = await new Promise<string>((resolve) =>
            provider.once("display_uri", resolve)
          );
          return uri;
        },
      },
      qrCode: {
        getUri: async () => {
          const provider = await connector.getProvider();
          const uri = await new Promise<string>((resolve) =>
            provider.once("display_uri", resolve)
          );
          return uri;
        },
      },
    };
  },
});
