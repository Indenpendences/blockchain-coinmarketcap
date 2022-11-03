// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DogeCoin is Ownable, ERC20 {
    constructor() ERC20("DogeCoin", "DC") {}

    function mint(address _to, uint256 _amount) public payable {
        _mint(_to, _amount);
    }

    receive() external payable {}
}
