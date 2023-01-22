import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers';
import { useIsMounted } from '../hooks/useIsMounted';
import { useAccount, useContract, useSigner } from 'wagmi'
import { fetchSigner } from '@wagmi/core'
import { getContract, getProvider } from '@wagmi/core'
import { toEther, toWei, notify } from '../utils/helpers'
import { useRouter } from 'next/router'
import {CONTRACT_ABI, CONTRACT_ADDRESS} from '../constants';

function Stake() {
    const mounted = useIsMounted();

    const { data: signer } = useSigner();
    const { isConnected } = useAccount()
    const contract = useContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      signerOrProvider: signer,
    })
    
    const [amount, setAmount] = useState("");
    const [selectedDuration, setSelectedDuration] = useState();
    const [lockPeriods, setLockPeriods] = useState([]);
    const [interestRate, setInterestRate] = useState(() => 0);
    const [loading, setLoading] = useState(false);


    const updateStakingOptions = async (numOfDays) => {
        getInterestRate(numOfDays)
        setSelectedDuration(numOfDays)
    }

    const handleChangeAmount = (event) => {
        setAmount(event.target.value);
    };
    
    const getLockPeriods = async () => {
        try {
            
        console.log(contract)
            let durations = await contract.getLockPeriods();

            durations = durations.map((duration) => duration.toString())

            setLockPeriods(durations)

        } catch (error) {
            console.log(error)
        }

    }

    const getInterestRate = async (numDays = 30) => {
        try {
            
            const rate = await contract.getInterestRate(numDays);

            setInterestRate(rate.toString() / 100)

        } catch (error) {
            console.log(error)
        }
    }

    const stakeEther = async (e) => {

        e.preventDefault();

        if(selectedDuration === undefined) {
            notify('Select a staking length', 'error');
            return;
        }

        if(amount === undefined || amount <= 0) {
            notify('Enter a staking amount', 'error');
            return;
        }
        
        try {

            const signer = await fetchSigner()
            const contract = getContract({
                address: CONTRACT_ADDRESS,
                abi: CONTRACT_ABI,
                signerOrProvider: signer,
            })

            const data = {value: toWei(amount.toString())}
            
            // stake ether
            const staked = await contract.stakeEther(selectedDuration, data)

            setLoading(true)

            await staked.wait();

            setLoading(false)
            
    
            // reset amount
            setAmount("");

            // congrats notification
            notify('Congrats. Staking successful', 'success');
            // router.push('/')
            
    
        } catch (error) {
            console.log("error", error.code);
            if(error.data.code === -32000) {
                notify('Insufficient funds for gas', 'error');
                return;
            } else if (error.code === -32603) {
                notify('You are not authorized to stake', 'error');
                return;
            }

            notify('Error while staking', 'error');
            // throw new Error("Error while staking");

        }
    }

    useEffect(() => {
        if (!signer) return
        getLockPeriods();
        getInterestRate();
    }, [signer])



    return (
        <div className="w-full md:w-10/12 mb-20 mx-auto">
            <div className="flex flex-row flex-wrap">
                <div className="bg-[#272459]  p-10 w-full mb-4 md:w-2/3 rounded-[20px] md:mt-0 md:mb-4 md:p-16 md:space-y-4 dark:bg-dark-700 dark:border-dark-800">
                    {
                        isConnected ? (
                            <>
                            <div>
                                <p className="text-2xl text-white font-extrabold md:text-4xl md:my-4">Stake MATIC</p>

                                {/* Staking length buttons */}
                                <div className="flex flex-wrap justify-start items-center my-6">
                                {
                                    lockPeriods.length > 0 && lockPeriods.map((period, idx) => {
                                        if(period == selectedDuration) {
                                            return <button 
                                            onClick={(e) => {
                                                const numOfDays = e.target.innerText.split(" ")[0]
                                                updateStakingOptions(numOfDays)
                                            }}
                                            key={idx} className="text-white font-bold px-3 py-2 mr-4 my-2 first:ml-0 border border-lime-500 rounded-lg hover:bg-[#19173f] md:px-5 md:py-3 bg-gradient-to-br from-lime-500 to-blue-500"
                                        >{period} days</button>
                                        } else {
                                            return <button 
                                            onClick={(e) => {
                                                const numOfDays = e.target.innerText.split(" ")[0]
                                                updateStakingOptions(numOfDays)
                                            }}
                                            key={idx} className="text-lime-500 font-bold px-3 py-2 mr-4 my-2 first:ml-0 border border-lime-500 rounded-lg hover:bg-[#19173f] md:px-5 md:py-3"
                                        >{period} days</button>
                                        }
                                    })
                                }
                                </div>
                            </div>

                            {/* Staking info area */}
                            <div className="flex justify-between items-center my-6">
                                <div className="flex flex-col">
                                    <p className="text-white my-2"><span className="font-bold">Lock period:</span> {selectedDuration} Days</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-white my-2 text-5xl font-bold">{interestRate}%</p>
                                    <p className="text-white my-2">APY</p>
                                </div>
                            </div>

                            {/* Staking input */}
                            <div className="my-6">
                                <form>
                                    <div className="w-full md:w-2/3 md:inline-block">
                                        <input onChange={handleChangeAmount} className="w-full my-4 text-white text-md border border-white bg-transparent rounded-md p-3 hover:bg-[#19173f] focus:bg-[#19173f] focus:border-0 focus:outline-none focus-visible:outline-white" type="text" />
                                    </div>
                                    <div className="w-full md:w-1/3 md:inline-block">
                                        <button onClick={(e) => stakeEther(e)} className="w-full my-4 bg-gradient-to-br from-[#0047ff] to-[#57048a] px-10 py-4 rounded-xl text-white font-black hover:bg-red-300 md:ml-4">{loading ? 'Staking...' : 'Stake'}</button>
                                    </div>
                                </form>
                            </div>
                            </>
                        ) : (
                            <div className='text-white text-center text-2xl font-bold p-4 border rounded-xl'>Connnect wallet to Stake</div>
                        )
                    }
                    
                </div>
                <div className="flex-col w-full md:w-1/3">
                    <div className="bg-[#272459] p-10 rounded-[20px] md:mt-0 mb-4 md:mr-0 md:ml-4 md:px-10 md:py-5 md:space-y-4 dark:bg-dark-700 dark:border-dark-800">
                        <h4 className="text-lg mb-4 font-bold uppercase text-white">instructions</h4>
                        <ol className='text-white text-md font-thin'>
                            <li>1. Select staking duration</li>
                            <li>2. Enter amount to stake</li>
                            <li>3. Stake! Easy!</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stake