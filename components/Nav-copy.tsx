import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import MobileMenu from './MobileMenu';
import Image from 'next/image';
import { RiWallet3Line } from "react-icons/ri";
import { RiMoonFill } from "react-icons/ri";
import { useConnect, useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import { ConnectKitButton } from "connectkit";
import { useIsMounted } from '../hooks/useIsMounted';

function Nav() {

  const mounted = useIsMounted();

  const { connector, isConnected } = useAccount();
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()

  useEffect(() => {
    console.log(isConnected);
  }, [isConnected])
  

  return (
    <nav id="header" className="w-full z-10 top-0 bg-transparent relative md:w-10/12 md:mx-auto">
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
              <RiMoonFill size={25} color="#ccc" />
            </div>

            {/* Wallet */}
            <div className="flex justify-center items-center cursor-pointer py-1 px-2 md:hidden">
                         
                {
                  mounted ? 
                    isConnected ? (
                      <RiWallet3Line onClick={() => disconnect} size={25} color='green' />
                    ) 
                    : (
                      <RiWallet3Line onClick={() => connect({ connector })} size={25} color='red' />  
                    ) 
                  : (
                    <p>Not mounted</p>
                  )
                }

            </div>

            {/* Connection Status */}              
              {
                mounted ?
                  isConnected ? (
                    <button 
                      onClick={()  => disconnect} 
                      className="text-white py-1 px-5 font-thin rounded-full shadow-sm shadow-lime-400 bg-lime-700 md:py-2 disabled:opacity-75 hidden md:block"
                    >Disconnect</button>
                  ) : (
                    <div>
                      
                      <ConnectKitButton />
                
                      {error && <div>{error.message}</div>}
                    </div>
                  ) 
                : (
                  <p>Not mounted</p>
                )
              }

            {/* Mobile Menu */}
            <div className="ml-2 md:hidden pt-6">
              <MobileMenu/>
            </div>

        </div>
        </div>
    </nav>
  )
}

export default Nav