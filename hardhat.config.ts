import '@nomiclabs/hardhat-waffle';
import '@openzeppelin/hardhat-upgrades';
import 'hardhat-gas-reporter';
import type { HardhatUserConfig } from 'hardhat/config';
import 'solidity-coverage';
// import { CONTRACT_FILE, flattenWithMetadata, OUT_DIR, SDPX_LICENSE } from './scripts/flatten';

const config: HardhatUserConfig = {
	solidity: {
		version: '0.8.0'
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

// task('flat', 'Flatten and append license to contract') //
// 	.addOptionalParam('file', '', CONTRACT_FILE)
// 	.addOptionalParam('license', '', SDPX_LICENSE)
// 	.addOptionalParam('output', '', OUT_DIR)
// 	.setAction(flattenWithMetadata);

export default config;
