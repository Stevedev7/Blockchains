

pragma experimental ABIEncoderV2;
pragma solidity ^ 0.6.1;
contract CryptoMatch{
    
    //User Account struct
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
    //Modifier for admin purpose
   modifier onlyAdmin {
      require(msg.sender == owner);
      _;
   }
   
   string [] public allTopics;
   //Add topics [only admin]
   function addTopics(string memory topic)public onlyAdmin{
        allTopics.push(topic);
   }
   address private owner;
    
   constructor()public{
       owner = msg.sender;
   }
    
   address public currentAddress = msg.sender;
    
   AccountDetails [] public allAccounts;
    //Add user
   function addUser(string memory _firstname, string memory _lastname, uint _age, string memory _bio, string memory _email) public{
       bool existingUser = false;
       
       //Checking if the user already exists
        if(getUser(msg.sender) != -1){
            existingUser = true;
        }
        if(!existingUser){
             address [] memory tempAddress;
              string [] memory temp;
              address [] storage matches;
              
              //Creating a list of all possible matches for new user
              for(uint i = 0; i < allAccounts.length; i ++){
                  matches.push(allAccounts[i].userAddress);
              }
            allAccounts.push(AccountDetails(msg.sender, _firstname, _lastname, _age, _bio, _email, temp, tempAddress, tempAddress, tempAddress, matches));
            
            //Adding the new user to other users' recommendations list
            updatePossibleMatches(msg.sender);
            
        } else {
            revert("Account already exists");
        }
   }
    
    //Function to get the index of the user
   function getUser(address _address) public view returns(int){
       for(uint i = 0; i < allAccounts.length; i++){
           if(allAccounts[i].userAddress == _address){
               return int(i);
           }
       }
        return -1;
   }
   
   
   //getting the list of all possible matches for the given user
   function getRecommendations(address _user) public view returns(address [] memory){
       return allAccounts[uint(getUser(_user))].possibleMatches;
   }
   
   //Function to add a user to other users' recommendations list
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