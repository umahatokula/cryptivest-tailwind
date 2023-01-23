import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/constants';
import { useCallback, useState } from 'react'
import { useContract, useSigner } from 'wagmi';
import { fetchSigner } from '@wagmi/core'
import AppContext from './AppContext';

export function ContextWrapper({children}) {

    const [testValue] = useState();

    const { data: signer, isError, isLoading } = useSigner();
    const contract = useContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        signerOrProvider: signer,
    })

    // assets
    const [assetIds, setAssetIds] = useState([])
    const [assets, setAssets] = useState([])

    // staking
    const [lockPeriods, setLockPeriods] = useState([])
    const [interestRate, setInterestRate] = useState(() => 0);
    const [isStaked, setIsStaked] = useState(false)
    

    const getAssetIds = useCallback(async () => {
        try {
            // console.log(contract, signer);
            const signer = await fetchSigner();

            const address = await signer.getAddress();

            const assetIds = await contract.connect(signer).getPositionIdsForAddress(address)
            
            setAssetIds(assetIds)

        } catch (error) {
            console.log(error, "error");
            throw new Error("Error while fetching asset IDs");
        }
    }, []);

    const getAssets = useCallback(async (ids) => {
        try {
            // const assetIds = await getAssetIds();
            // console.log('IDs', assetIds);

            const queriedAssets = await Promise.all(
                ids.map(id => contract.getPositionById(id))
            )

            let assets = []
            queriedAssets.map(async asset => {
                const parsedAsset = {
                positionId: asset.positionId,
                percentInterest: Number(asset.percentInterest) / 100,
                daysRemaining: await calcDaysRemaining( Number(asset.unlockDate) ),
                etherInterest: toEther(asset.weiInterest),
                etherStaked: toEther(asset.weiStaked),
                open: asset.open,
                }
                assets.push(parsedAsset)
            })
            console.log('Asset=>', assets);

            setAssets(assets)
        
        } catch (error) {

            console.log(error);
            console.log('error block');

        } finally {
            console.log('finally block getAssetIds');
        }
    }, []);

    const getLockPeriods = useCallback(async () => {
        try {
            
        let durations = await contract.getLockPeriods();
        durations = durations.map(duration => duration.toString())

        setLockPeriods(durations)

        } catch (error) {
        console.log(error)
        }

    }, [])

    const getInterestRate = useCallback(async (numDays = 30) => {
        try {
            
        const rate = await contract.getInterestRate(numDays);

        setInterestRate(rate.toString() / 100)

        } catch (error) {
        console.log(error)
        }
    }, [])

    const stake = useCallback(async (stakingLength, amount) => {
        console.log(stakingLength, amount)

        try{
        
        stakingLength = stakingLength.toString();
        amount = amount.toString();

        const data = {value: ethers.utils.parseEther(amount)}
        contract.stakeEther(stakingLength, data)
        contract.connect(signer).stakeEther(stakingLength, data)

        return true

        } catch (error) {
        console.log(error, "error");
        throw new Error("Error while staking");
        }
    }, [])

    return <AppContext.Provider value={{ 
        testValue,
        assetIds,
        assets,
        lockPeriods,
        isStaked,
        interestRate,
        getAssetIds,
        getAssets,
        getLockPeriods,
        stake,
        getInterestRate,
     }}>
        {children}
    </AppContext.Provider>
}