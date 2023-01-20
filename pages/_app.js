import '@/styles/globals.css';
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { mainnet, polygon, polygonMumbai } from "wagmi/chains";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { ContextWrapper } from '@/contexts/ContextWrapper';

import { ThemeProvider } from 'next-themes'



const alchemyId = process.env.ALCHEMY_ID;

// Choose which chains you'd like to show
const chains = [mainnet, polygon, polygonMumbai];

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId,
    chains,
  }),
);

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <ContextWrapper>
          <ThemeProvider enableSystem={true} attribute="class">
            <div className='w-full h-auto bg-stake-800 dark:bg-dark-800'>
              <div className='w-11/12 mx-auto'>
                <Nav />
                <Component {...pageProps} />
                <Footer />
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
          </ThemeProvider>
        </ContextWrapper>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}
