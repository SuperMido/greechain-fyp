import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.ethereum)
} else {
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/d7dde0fa90274c6d873d75e84505f624'
    );

    web3 = new Web3(provider);
}

export default web3;