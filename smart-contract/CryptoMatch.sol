
pragma experimental ABIEncoderV2;
pragma solidity ^ 0.6.1;
contract CryptoMatch{
    struct AccountDetails{
        address userAddress;
        string firstname;
        string lastname;
        uint age;
        string bio;
        string email;
        string [] topics;
        address [] likedAccounts ;
        address [] rejctedAccounts;
        address [] matchedAccounts;
        
    }
    
    address public currentAddress = msg.sender;
    
    mapping(address => AccountDetails) internal allAccounts;
    
    function addUser(string memory _firstname, string memory _lastname, uint _age, string memory _bio, string memory _email) public returns(uint){
        AccountDetails memory existingUser = allAccounts[msg.sender];
        uint errorBit;
        if(existingUser.age == 0){
            string [] memory tempTopic;
            address[] memory tempAddress;
            allAccounts[msg.sender] = AccountDetails(msg.sender, _firstname, _lastname, _age, _bio, _email, tempTopic, tempAddress, tempAddress, tempAddress);
        } else {
            errorBit = 1;
        }
        return errorBit;
    }
    
    function getUser(address _address) public view returns(AccountDetails memory){
        return allAccounts[_address];
    }
}