// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Dai is ERC20, Ownable {
    constructor() ERC20("Dai", "DAI") {}

    function mint(address _to, uint256 _amount) public payable {
        _mint(_to, _amount);
    }

    receive() external payable {}
}
