import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { polygon, polygonMumbai, hardhat } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ContextWrapper } from '@/contexts/ContextWrapper';
import Nav from '@/components/Nav';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const { chains, provider } = configureChains(
  [polygon, polygonMumbai, hardhat],
  [
    publicProvider(),
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider theme={darkTheme()} chains={chains}>
        <ContextWrapper>
          <div className='w-full min-h-screen bg-white'>
            <div className='w-11/12 mx-auto'>
              <Nav />
              <Component {...pageProps} />
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </div>
          </div>
        </ContextWrapper>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
