// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Aryan {
    uint public Supply;

    struct org {
        address orgaddr;
        uint tokenamount;
        string name;
    }

    struct Holder {
        string holderPost;
        uint claimed;
        uint tokenamount;
        uint startTime;
        uint vestingTime;
    }

    mapping(address => uint) public balance;
    mapping(address => bool) public whitelistAddr;
    mapping(address => org) public orgs;
    mapping(address => Holder) public holders;

    event Createholder(uint startTime, uint vestingTime);

    modifier orgOwner() {
        require(orgs[msg.sender].orgaddr == msg.sender,"Not authorized");
        _;
    }

    modifier Whitelisted() {
        require(whitelistAddr[msg.sender],"NOT whitelisted ");
        _;
    }

    function addorg(string memory _name,address _orgaddr,uint _tokenamount) public {
        org storage neworg = orgs[_orgaddr];
        neworg.name = _name;
        neworg.orgaddr = _orgaddr;
        neworg.tokenamount = _tokenamount;
        Supply = Supply + _tokenamount;}

    function addholder(address _holderAddress,string memory _post,uint _vestingTime,uint _tokenamount) public orgOwner {
        org storage neworg = orgs[msg.sender];
        require(neworg.tokenamount >= _tokenamount,"Cannot be greater than the total token");
        Holder storage holder = holders[_holderAddress];
        holder.holderPost = _post;
        holder.tokenamount = _tokenamount;
        holder.claimed = 0;
        holder.startTime = block.timestamp;
        holder.vestingTime = _vestingTime;

        emit Createholder(block.timestamp, _vestingTime);}

    function whitelistAddress(address _holder) external orgOwner {
        whitelistAddr[_holder] = true;}

    function claim() external Whitelisted {
        Holder storage holder = holders[msg.sender];
        require(holder.startTime != 0,"Not registered");
        require(block.timestamp >=holder.startTime + holder.vestingTime,"Vesting time remains");
        uint claimable = holder.tokenamount - holder.claimed;
        require(claimable > 0, "Not available");
        holder.claimed += claimable;
        balance[msg.sender] += claimable;}

    function getclaimed() public view returns (uint) {
        return balance[msg.sender];}

    function getholder(address _address) public view returns (Holder memory) {
        return holders[_address];}
}
