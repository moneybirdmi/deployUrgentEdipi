pragma solidity 0.6.12;

import "@pancakeswap/pancake-swap-lib/contracts/token/BEP20/BEP20.sol";

//SPDX-License-Identifier: MIT

contract EDIPI is BEP20 {
    string constant NAME = "EDIPI Token";
    string constant SYMBOL = "EDIPI";
    uint8 constant DECIMALS = 18;
    uint256 constant TOTAL_SUPPLY = 500_000 * 10**uint256(DECIMALS);

    constructor(address _mintTo) public BEP20(NAME, SYMBOL) {
        _mint(_mintTo, TOTAL_SUPPLY);
    }

    /// @notice Creates `_amount` token to `_to`. Must only be called by the owner (MasterChef).
    function mint(address _to, uint256 _amount) public onlyOwner {
        _mint(_to, _amount);
    }
}
