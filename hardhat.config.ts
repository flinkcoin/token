import '@nomiclabs/hardhat-waffle';
import '@openzeppelin/hardhat-upgrades';
import 'hardhat-gas-reporter';
import type { HardhatUserConfig } from 'hardhat/config';
import 'solidity-coverage';

const config: HardhatUserConfig = {
	solidity: {
		version: '0.8.0'
	},
	defaultNetwork: 'hardhat',
	networks: {
		hardhat: {}
	},
	gasReporter: {
		excludeContracts: ['mocks/'],
		showTimeSpent: true,
		currency: 'EUR'
	}
};

export default config;
