export const CONTRACT_ADDRESS = '0xF8c6A9CA2182E1814939D9c2d8c64Ee79f9F5652' // polygon mumbai
// export const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3' // hardhat
export const CONTRACT_ABI = [
    {
      "inputs": [],
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "lockPeriod",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "TokenStaked",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "positionId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "newUnlockDate",
          "type": "uint256"
        }
      ],
      "name": "changeUnlockDate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "positionId",
          "type": "uint256"
        }
      ],
      "name": "closePosition",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "currentPositionId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "numDays",
          "type": "uint256"
        }
      ],
      "name": "getInterestRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getLockPeriods",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "positionId",
          "type": "uint256"
        }
      ],
      "name": "getPositionById",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "positionId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "walletAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "createdDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "unlockDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "percentInterest",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "weiStaked",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "weiInterest",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "open",
              "type": "bool"
            }
          ],
          "internalType": "struct Staking.Position",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "walletAddress",
          "type": "address"
        }
      ],
      "name": "getPositionIdsForAddress",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "lockPeriods",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "numDays",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "basisPoints",
          "type": "uint256"
        }
      ],
      "name": "modifyLockPeriods",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "positionIdsByAddress",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "positions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "positionId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "walletAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "createdDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "unlockDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "percentInterest",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "weiStaked",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "weiInterest",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "open",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "numDays",
          "type": "uint256"
        }
      ],
      "name": "stakeEther",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tiers",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
]