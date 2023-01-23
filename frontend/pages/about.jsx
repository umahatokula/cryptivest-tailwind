import React from 'react'

function About() {
  return (
    <div>
        <h4 className='text-2xl font-bold mb-12 text-white'>Get to know <span className='text-lime-500 underline'>CryptiVest</span></h4>
        <p className='text-white font-normal mb-3 justify-items-stretch'>
            Introduce our new crypto staking dApp, CryptiVest, the perfect platform for earning passive income on your MATIC holdings. The dApp allows users to stake MATIC for a chosen duration and earn a high annual percentage yield (APY) on their investment.
        </p>
        <p className='text-white font-normal mb-3 justify-items-stretch'>
            Users can easily stake their MATIC from various duration options. Upon completion of the staking period, users can close their position to return their staked MATIC along with the earned interest. However, if a user closes their position before the expiration of the selected duration, they will not receive any interest earned on their investment.
        </p>
        <p className='text-white font-normal mb-3 justify-items-stretch'>
            Our dApp uses a secure and reliable smart contract to keep your staked funds safe and accessible. With our user-friendly interface, anyone can start earning passive income on their MATIC holdings.
        </p>
        <p className='text-white font-normal mb-3 justify-items-stretch'>
            Get started today and start earning a high APY on your investment!
        </p>
        <p className='text-white font-normal mb-3 justify-items-stretch'>
            <span className='text-lime-500'><b>Note:</b></span> The APY rate and the duration options that are available may vary depending on the current market conditions, so it is recommended that you check the dApp before making a deposit.
        </p>
    </div>
  )
}

export default About