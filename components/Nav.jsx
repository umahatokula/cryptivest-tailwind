import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { RiMoonFill } from "react-icons/ri";
import { useAccount } from 'wagmi'
import { useIsMounted } from '../hooks/useIsMounted';
import { ConnectKitButton } from "connectkit";
import MobileMenu from './MobileMenu';
import ThemeChanger from './ThemeChanger';

function Nav() {
  
  const mounted = useIsMounted();

  const { isConnected } = useAccount();

  useEffect(() => {
    console.log(isConnected);
  }, [isConnected])
  

  return (
    <>
      <nav id="header" className="w-full z-10 top-0 bg-transparent relative pt-6 pb-12 md:w-10/12 md:mx-auto">
        <div className="flex justify-between items-center">
        <Image
          src="/CryptiVest-light.png"
          alt="Picture of the author"
          width={80}
          height={80}
        />
        <div className="flex justify-center items-center font-semibold space-x-2 hidden md:block">
            <Link href="/" className="text-white text-lg font-bold px-4">Home</Link>
            <Link href="/stake" className="text-white text-lg font-bold px-4">Stake</Link>
            <Link href="/tiers" className="text-white text-lg font-bold px-4">Tiers</Link>
        </div>

        <div className="flex items-center justify-center cursor-pointer space-x-2">

            {/* Toggle Theme Button */}
            <div className="flex justify-center items-center py-1 px-2">
              <ThemeChanger />
            </div>

            {/* Connection Status */}              
              {
                mounted ?
                  <ConnectKitButton />
                : (
                  <p>Not mounted</p>
                )
              }

            {/* Mobile Menu */}
            <div className="ml-2 md:hidden pt-6">
              <MobileMenu />
            </div>

        </div>
        </div>
    </nav>
    </>
  )
}

export default Nav