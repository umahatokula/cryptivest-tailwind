import React from 'react'

function Tiers() {
  return (
    <div className="w-full md:w-10/12 mb-20 mx-auto">
        <div className='flex flex-wrap'>
            <div className='w-full md:w-4/12 bg-stake-700 text-center text-white my-3 p-6 h-auto border-8 border-dashed border-stake-800 rounded-4xl'>
                <p className='text-2xl font-bold mb-6'>Tier 1</p>
                <p className='text-lg font-semibold mb-8'>Bronze</p>
                <p className='text-lg font-semibold mb-2 text-stake-500'>Locked For</p>
                <p className='text-lg font-semibold mb-8'>30 Days</p>
                <p className='text-lg font-semibold mb-2 text-stake-500'>Annual Percentage Yield</p>
                <p className='text-lg font-semibold mb-4'>7%</p>
            </div>
            <div className='w-full md:w-4/12 bg-stake-700 text-center text-white my-3 p-6 h-96 border-8 border-dashed border-stake-800 rounded-4xl'>
                <p className='text-2xl font-bold mb-6'>Tier 2</p>
                <p className='text-lg font-semibold mb-8'>Silver</p>
                <p className='text-lg font-semibold mb-2 text-stake-500'>Locked For</p>
                <p className='text-lg font-semibold mb-8'>90 Days</p>
                <p className='text-lg font-semibold mb-2 text-stake-500'>Annual Percentage Yield</p>
                <p className='text-lg font-semibold mb-4'>10%</p>
            </div>
            <div className='w-full md:w-4/12 bg-stake-700 text-center text-white my-3 p-6 h-96 border-8 border-dashed border-stake-800 rounded-4xl'>
                <p className='text-2xl font-bold mb-6'>Tier 3</p>
                <p className='text-lg font-semibold mb-8'>Gold</p>
                <p className='text-lg font-semibold mb-2 text-stake-500'>Locked For</p>
                <p className='text-lg font-semibold mb-8'>180 Days</p>
                <p className='text-lg font-semibold mb-2 text-stake-500'>Annual Percentage Yield</p>
                <p className='text-lg font-semibold mb-4'>12%</p>
            </div>
        </div>
    </div>
  )
}

export default Tiers