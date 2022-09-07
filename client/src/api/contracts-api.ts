import { ethers, ContractFactory } from 'ethers';
import { getIMXAddress, getNetwork } from "../deploy/utils";

const abi = "";
const bytecode = ""

export const deploySmartContract = async (owner: string, contractName: string, contractSymbol: string) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();

    console.log("Deploying Contract with the account:", signer._address);

    //  Get chain id from metamask so we can work out what network we are on.
    const chainId = window.ethereum.networkVersion;

    //  Resolve network based on chain id.
    const network = getNetwork(chainId)
    const imxAddress = getIMXAddress(network);

    const Asset = new ContractFactory(abi, bytecode, signer)
    const asset = await Asset.deploy(owner, contractName, contractSymbol, imxAddress);
    await asset.deployed()
    console.log("Deployed Contract Address:", asset.address);
    console.log('Verifying contract in 5 minutes...');

    return asset
}
