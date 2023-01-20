import Image from 'next/image'
import React from 'react'

function AssetCard({asset, withdraw}) {
  return (
    <div className='flex justify-between items-center  bg-stake-700 backdrop-blur-md rounded-[20px] w-full mb-6 p-5 dark:bg-dark-700 dark:border-dark-800'>
      <div className='flex h-24 w-24 p-1 rounded-full bg-gradient-to-br from-blue-600 to-primary-600'>
        <div className='flex h-full w-24 rounded-full bg-primary-900'></div>
      </div>
      <div className='flex flex-wrap justify-end items-baseline space-y-4 space-x-2 md:justify-start md:space-x-8 p-10'>
          <div className='bg-gray-800 text-white text-xs py-1 px-4 rounded-xl'>Staked: {asset.etherStaked}</div>
          <div className='bg-gray-800 text-white text-xs py-1 px-4 rounded-xl'>APY: {asset.percentInterest}%</div>
          <div className='bg-gray-800 text-white text-xs py-1 px-4 rounded-xl'>Days left: {asset.daysRemaining}</div>
          <div className='bg-gray-800 text-white text-xs py-1 px-4 rounded-xl'>Interest: {asset.etherInterest}</div>
          <div>
            {
              asset.open ? (
                <button onClick={() => withdraw(asset.positionId)} className='py-1 px-4 text-md text-white rounded-md bg-gradient-to-br from-blue-600 to-primary-600 cursor-pointer border border-gray-500 drop-shadow-md hover:drop-shadow-2xl hover:text-lime-500 dark:bg-none dark:border-lime-500'>Withdraw</button>
              ) : (
                <button className='py-1 px-4 text-md font-bold bg-gray-600/90 text-white rounded-md cursor-pointer border border-dark-500 drop-shadow-md' disabled>Closed</button>
              )
            }
          </div>
      </div>
    </div>
  )
}

export default AssetCard