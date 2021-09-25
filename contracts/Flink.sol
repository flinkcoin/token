// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.0;

import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol';

contract Flink is Initializable, OwnableUpgradeable, ERC20Upgradeable, ERC20BurnableUpgradeable {
	using SafeERC20Upgradeable for IERC20Upgradeable;

	function __Flink_init() public initializer {
		__ERC20_init('Flink', 'FLINK');
		__ERC20Burnable_init_unchained();
		__Ownable_init();
		__Flink_init_unchained();
	}

	function __Flink_init_unchained() internal initializer {}

	function mint(address to, uint256 amount) public onlyOwner {
		_mint(to, amount);
	}
}
