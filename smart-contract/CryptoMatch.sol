

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
        address [] possibleMatches;
    }
    
   modifier onlyAdmin {
      require(msg.sender == owner);
      _;
   }
   
   string [] public allTopics;
   
   function addTopics(string memory topic)public onlyAdmin{
        allTopics.push(topic);
   }
   address private owner;
    
   constructor()public{
       owner = msg.sender;
   }
    
   address public currentAddress = msg.sender;
    
   AccountDetails [] public allAccounts;
    
   function addUser(string memory _firstname, string memory _lastname, uint _age, string memory _bio, string memory _email) public{
       bool existingUser = false;
        if(getUser(msg.sender) != -1){
            existingUser = true;
        }
        if(!existingUser){
             address [] memory tempAddress;
              string [] memory temp;
              address [] storage matches;
              for(uint i = 0; i < allAccounts.length; i ++){
                  matches.push(allAccounts[i].userAddress);
              }
            allAccounts.push(AccountDetails(msg.sender, _firstname, _lastname, _age, _bio, _email, temp, tempAddress, tempAddress, tempAddress, matches));
            
            updatePossibleMatches(msg.sender);
            
        } else {
            revert("Account already exists");
        }
   }
    
   function getUser(address _address) public view returns(int){
       for(uint i = 0; i < allAccounts.length; i++){
           if(allAccounts[i].userAddress == _address){
               return int(i);
           }
       }
        return -1;
   }
   
   function updatePossibleMatches(address _address) internal {
       uint i = 0;
       while(i < allAccounts.length){
           if(allAccounts[i].userAddress != _address){
               allAccounts[i].possibleMatches.push(_address);
           }
           i++;
       }
   }
}