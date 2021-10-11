// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.2;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol';
import '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';

contract Flink is ERC20, ERC20Burnable, Ownable {
	using SafeERC20 for IERC20;

	constructor() ERC20('Flink', 'FLINK') {}

	function mint(address to, uint256 amount) public onlyOwner {
		_mint(to, amount);
	}
}
