import Image from 'next/image'
import React from 'react'

function AssetCard({asset}) {
  return (
    <div className='flex justify-between items-center  bg-primary-800/40 backdrop-blur-md rounded-[20px] w-full mb-6 p-5'>
      <div className='flex h-24 w-24 p-1 rounded-full bg-gradient-to-br from-blue-600 to-primary-600'>
        <div className='flex h-full w-24 rounded-full bg-primary-900'></div>
      </div>
      <div className='flex flex-wrap justify-start items-baseline space-y-4 space-x-8 p-10'>
          <div className='bg-gray-800/60 text-white text-xs py-1 px-4 rounded-xl'>Staked: {asset.etherStaked}</div>
          <div className='bg-gray-800/60 text-white text-xs py-1 px-4 rounded-xl'>APY: {asset.percentInterest}%</div>
          <div className='bg-gray-800/60 text-white text-xs py-1 px-4 rounded-xl'>Days left: {asset.daysRemaining}</div>
          <div className='bg-gray-800/60 text-white text-xs py-1 px-4 rounded-xl'>Interest: {asset.etherInterest}</div>
      </div>
    </div>
  )
}

export default AssetCard