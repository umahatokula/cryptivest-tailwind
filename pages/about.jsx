import React from 'react'

function About() {
  return (
    <div>
        <h4 className='text-2xl font-bold mb-12 text-white'>Get to know <span className='text-lime-500 underline'>CryptiVest</span></h4>
        <p className='text-white font-normal mb-3 justify-items-stretch'>
            Introducing our new crypto staking dApp, CryptiVest - the ultimate platform for earning passive income on your MATIC holdings! Our dApp allows users to stake their MATIC for a selected duration, and earn a high annual percentage yield (APY) on their investment.
        </p>
        <p className='text-white font-normal mb-3 justify-items-stretch'>
            With our staking dApp, users can easily deposit their MATIC and choose from a variety of staking duration options. Once the staking period is over, users can withdraw their staked MATIC along with the earned interest. However, if a user closes their position before the expiration of the selected duration, they will lose all interest earned on their investment.
        </p>
        <p className='text-white font-normal mb-3 justify-items-stretch'>
            Our dApp utilizes a secure and reliable smart contract, ensuring that your staked funds are always safe and accessible. Plus, our user-friendly interface makes it easy for anyone to start earning passive income on their MATIC holdings.
        </p>
        <p className='text-white font-normal mb-3 justify-items-stretch'>
            Get started today and start earning a high APY on your MATIC!
        </p>
        <p className='text-white font-normal mb-3 justify-items-stretch'>
            <span className='text-lime-500'><b>Note:</b></span> The APY rate and the duration options that are available may vary depending on the current market conditions, so it is recommended that you check the dApp before making a deposit.
        </p>
    </div>
  )
}

export default About