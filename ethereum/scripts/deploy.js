const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledContract = require('../build/MyContractA.json');

const provider = new HDWalletProvider(
    'crack material early hotel faculty harsh bless anger arm cattle choose lazy',
    'https://rinkeby.infura.io/v3/d7dde0fa90274c6d873d75e84505f624'
);

const web3 = new Web3(provider);

(async () => {
	const accounts = await web3.eth.getAccounts();

	console.log(`Attempting to deploy from account: ${accounts[0]}`);

	const deployedContract = await new web3.eth.Contract(compiledContract.abi)
		.deploy({
			data: '0x' + compiledContract.evm.bytecode.object,
			arguments: [3, 5]
		})
		.send({
			from: accounts[0],
			gas: '2000000'
		});

	console.log(
		`Contract deployed at address: ${deployedContract.options.address}`
	);

	provider.engine.stop();
})();