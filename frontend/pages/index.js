import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import AssetCard from '@/components/assets/AssetCard'
import { useContext, useEffect, useState } from 'react'
import AppContext from '@/contexts/AppContext'
import { useAccount, useContract, useSigner } from 'wagmi'
import { fetchSigner } from '@wagmi/core'
import { getContract, getProvider } from '@wagmi/core'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/constants'
import { ethers } from 'ethers'
import { notify } from '@/utils/helpers'


export default function Home() {
  
  const { data: signer, isError, isLoading } = useSigner();

  // const { assetIds, assets, getAssetIds, getAssets } = useContext(AppContext)

  const { address, isConnected } = useAccount()

  // assets
  const [assetIds, setAssetIds] = useState([])
  const [assets, setAssets] = useState([])
  const [assetToWithdraw, setAssetToWithdraw] = useState()
  const [loading, setLoading] = useState(false)
  
  const toWei = ether => ethers.utils.parseEther(ether)
  const toEther = wei => ethers.utils.formatEther(wei)

  const calcDaysRemaining = (unlockDate) => {
    const timeNow = Date.now() / 1000
    const secondsRemaining = unlockDate - timeNow
    return Math.max( (secondsRemaining / 60 / 60 / 24).toFixed(0), 0)
  }
  
  const getAssetIds = async () => {

    // try {
      const signer = await fetchSigner()
      const contract = getContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        signerOrProvider: signer,
      })


      const assetIds = await contract.connect(signer).getPositionIdsForAddress(address)
      setAssetIds(assetIds)
    // } catch (error) {
    //   notify('Could not fetch data', 'error')
    // }
  }
  
  const getAssets = async (ids) => {

    try {
      if(isConnected) {
        
        setAssets([])

        const signer = await fetchSigner()
        const contract = getContract({
          address: CONTRACT_ADDRESS,
          abi: CONTRACT_ABI,
          signerOrProvider: signer,
        })

        const queriedAssets = await Promise.all(
          ids.map(id => contract.connect(signer).getPositionById(id))
        )

        queriedAssets.map(async asset => {
          const parsedAsset = {
            positionId: asset.positionId,
            percentInterest: Number(asset.percentInterest) / 100,
            daysRemaining: calcDaysRemaining( Number(asset.unlockDate) ),
            etherInterest: ethers.utils.formatEther(asset.weiInterest),
            etherStaked: ethers.utils.formatEther(asset.weiStaked),
            open: asset.open,
          }

          setAssets(prev => [...prev, parsedAsset])
        })
      }
    } catch (error) {
      
    }
  }

  const withdraw = async(positionId) => {

    // set asset that will be withdrawn
    try {
      if(isConnected) {
        setAssetToWithdraw(positionId)

        const signer = await fetchSigner()
        const contract = getContract({
          address: CONTRACT_ADDRESS,
          abi: CONTRACT_ABI,
          signerOrProvider: signer,
        })

        const tx = await contract.connect(signer).closePosition(positionId)
        setLoading(true)
        await tx.wait()
        setLoading(false)
        getAssets(assetIds);
      }
    } catch (error) {
      console.log("🚀 ~ file: index.js:104 ~ withdraw ~ error", error)
      
    }
  }

  useEffect(() => {
    if (!signer) return
    getAssetIds();
  }, [signer])

  useEffect(() => {
    getAssets(assetIds);
  }, [assetIds, address, isConnected])

  return (
    <div>
      <div className="w-full md:max-w-3xl mb-20 mx-auto">

        <p className="font-bold tracking-widest text-transparent text-sm mt-2 mb-12 uppercase bg-clip-text bg-gradient-to-r from-[#ffd900] to-[#39FF14] text-center md:mb-2 md:mt-18">stakeon</p>
        <p className="p-2 text-5xl text-center font-black leading-snug md:text-6xl bg-clip-text text-white">CryptiVest Defi Staking</p>
        <p className="tracking-widest text-xg mt-12 text-center font-thin md:text-lg md:mt-10 animate-text bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-blue-500 to-blue-700">Dedicated To Increasing User Staking Income</p>

        {/* call to action */}
        <div className="flex w-full mt-24 justify-center items-center space-x-4">
          <Link href="/stake" className="bg-gradient-to-br from-[#0047ff] to-[#57048a] px-10 py-3 rounded-full text-white font-black hover:bg-red-300">Start Staking</Link>
          <Link href="/about" className="bg-transparent border-2 border-white px-10 py-3 rounded-full text-white font-black">Learn More</Link>
        </div>
      </div>

      {/* Portfolio */}
      <div className="w-full z-10 top-0 bg-transparent md:w-10/12 md:mx-auto">
        <p className="text-3xl text-white mb-12 md:text-3xl">My Assets</p>

        {/* <!-- <AssetCard /> --> */}
        {
          assets.length > 0 ? (
            assets.reverse().map((asset,idx) => (
              <div key={idx} className="space-y-4">
                <AssetCard asset={asset} withdraw={withdraw} loading={loading} assetToWithdraw={assetToWithdraw} />
              </div>
            ))
          ) : (
            <div className='text-white text-center'>No assets</div>
          )
        }

      </div>

    </div>
  )
}
