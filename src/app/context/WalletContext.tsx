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
  const { chains, publicClient, webSocketPublicClient } = configureChains(
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
    webSocketPublicClient,
  });

  console.log(phantomWallet({ chains }).downloadUrls);

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
    console.log(connector);

    return {
      connector,
      mobile: {
        getUri: async () => {
          const provider = await connector.getProvider();
          const uri = await new Promise<string>((resolve) =>
            provider.once("display_uri", resolve)
          );
          console.log("mobile uri", uri);
          return "https://phantom.app/download";
        },
      },
      qrCode: {
        getUri: async () => {
          const provider = await connector.getProvider();
          const uri = await new Promise<string>((resolve) =>
            provider.once("display_uri", resolve)
          );
          console.log("qrcode uri", uri);

          return "https://phantom.app/download";
        },
        instructions: {
          learnMoreUrl: "https://phantom.app/",
          steps: [
            {
              description:
                "We recommend putting My Wallet on your home screen for faster access to your wallet.",
              step: "install",
              title: "Open the My Wallet app",
            },
            {
              description:
                "After you scan, a connection prompt will appear for you to connect your wallet.",
              step: "scan",
              title: "Tap the scan button",
            },
          ],
        },
      },
      extension: {
        instructions: {
          learnMoreUrl: "https://phantom.app/",
          steps: [
            {
              description:
                "We recommend pinning My Wallet to your taskbar for quicker access to your wallet.",
              step: "install",
              title: "Install the My Wallet extension",
            },
            {
              description:
                "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
              step: "create",
              title: "Create or Import a Wallet",
            },
            {
              description:
                "Once you set up your wallet, click below to refresh the browser and load up the extension.",
              step: "refresh",
              title: "Refresh your browser",
            },
          ],
        },
      },
    };
  },
});
