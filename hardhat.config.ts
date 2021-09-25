import '@nomiclabs/hardhat-solhint';
import '@nomiclabs/hardhat-waffle';
import '@openzeppelin/hardhat-upgrades';
import 'hardhat-gas-reporter';
import 'hardhat-tracer';
import type { HardhatUserConfig } from 'hardhat/config';
import 'solidity-coverage';

const config: HardhatUserConfig = {
	solidity: {
		version: '0.8.2',
		settings: {
			optimizer: {
				enabled: true
			}
		}
	},
	defaultNetwork: 'hardhat',
	networks: {
		hardhat: {
			forking: {
				url: 'https://bsc-dataseed.binance.org'
			}
		}
	},
	gasReporter: {
		excludeContracts: ['mocks/'],
		showTimeSpent: true,
		currency: 'EUR'
	}
};

export default config;
