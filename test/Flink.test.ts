import type { Contract } from '@ethersproject/contracts';
import chai from 'chai';
import { solidity } from 'ethereum-waffle';
import { ethers } from 'hardhat';

chai.use(solidity);

describe('Maribor', () => {
	// @ts-expect-error Temporarily unused
	let contract: Contract;

	beforeEach(async () => {
		const Flink = await ethers.getContractFactory('Flink');
		contract = await Flink.deploy();
	});
});
