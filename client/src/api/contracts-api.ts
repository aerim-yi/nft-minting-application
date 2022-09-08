// @TODO: clean up code
import { ethers, ContractFactory } from 'ethers';
import { getIMXAddress, getNetwork } from "../deploy/utils";

export const deploySmartContract = async (owner: string, contractName: string, contractSymbol: string) => {
    const response = await fetch("/asset-contract");
    const contractJSON = await response.json();

    const abi = contractJSON?.abi;
    const bytecode = contractJSON?.bytecode;

    if (abi && bytecode) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();

        console.log("Deploying Contract with the account:", signer._address);
        console.log("abi", abi)
        console.log("bytecode", bytecode)

        // Get chain id from metamask so we can work out what network we are on.
        const chainId = window.ethereum.networkVersion;

        // Resolve network based on chain id.
        const network = getNetwork(chainId);
        const imxAddress = getIMXAddress(network);

        const Asset = new ContractFactory(abi, bytecode, signer);

        // Deploy an instance of the contract
        const asset = await Asset.deploy(owner, contractName, contractSymbol, imxAddress);
        await asset.deployed();
        console.log("Deployed Contract Address:", asset.address);
        console.log('Verifying contract in 5 minutes...');

        return asset

    } else {
        console.log('Contract ABI and Bytecode does not exsit, please compile your smart contract')
    }
}
