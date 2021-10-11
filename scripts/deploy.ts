import { ethers } from 'hardhat';
import type { Flink } from '../typechain';

async function main() {
	const FlinkContract = await ethers.getContractFactory('Flink');

	const flink = (await FlinkContract.deploy()) as Flink;

	await flink.deployed();

	console.log('Contract deployed to address:', flink.address);
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
