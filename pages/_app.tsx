import '../src/styles/GlobalStyles.ts';
import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import { theme } from "../src/utils/themes/theme";
import GlobalStyle from "../src/styles/GlobalStyles";
import "../src/styles/styles.css";

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

console.log(process.env.NEXT_PUBLIC_ALCHEMY_ID)

export default function App({ Component, pageProps }: AppProps) {
  const { chains, provider } = configureChains(
    [chain.polygon],
    [
      alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID || "" }),
      publicProvider()
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: 'Veriface',
    chains
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  })
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </ThemeProvider>
  );
}
