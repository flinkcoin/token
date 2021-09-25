import type { Contract } from '@ethersproject/contracts';
import chai, { expect } from 'chai';
import { solidity } from 'ethereum-waffle';
import { ethers, upgrades } from 'hardhat';

chai.use(solidity);

describe('Flink', () => {
	let contract: Contract;

	beforeEach(async () => {
		const Flink = await ethers.getContractFactory('Flink');
		contract = await upgrades.deployProxy(Flink, [], { initializer: '__Flink_init', kind: 'uups' });
	});

	describe('initialization', () => {
		it('should set sender as owner', async () => {
			const [{ address }] = await ethers.getSigners();
			const owner = await contract.owner();

			expect(owner).to.equal(address);
		});
	});
});
