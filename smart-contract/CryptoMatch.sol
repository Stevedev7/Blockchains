pragma experimental ABIEncoderV2;
pragma solidity ^0.6.1;

contract CryptoMatch {
    //User Account struct
    struct AccountDetails {
        address userAddress;
        string firstname;
        string lastname;
        uint256 age;
        string bio;
        string email;
        string[] topics;
        address[] likedAccounts;
        address[] rejectedAccounts;
        address[] matchedAccounts;
        address[] possibleMatches;
    }
    //Modifier for admin purpose
    modifier onlyAdmin {
        require(msg.sender == owner);
        _;
    }

    string[] public allTopics;

    //Add topics [only admin]
    function addTopics(string memory topic) public onlyAdmin {
        allTopics.push(topic);
    }

    address private owner;

    constructor() public {
        owner = msg.sender;
    }

    address public currentAddress = msg.sender;

    AccountDetails[] public allAccounts;

    //Add user
    function addUser(
        string memory _firstname,
        string memory _lastname,
        uint256 _age,
        string memory _bio,
        string memory _email,
        string[] memory tops
    ) public {
        bool existingUser = false;

        //Checking if the user already exists
        if (getUser(msg.sender) != -1) {
            existingUser = true;
        }
        if (!existingUser) {
            address[] memory tempAddress;
            address[] storage matches;

            //verify the given topics
            verifyTopics(tops);

            //Creating a list of all possible matches for new user
            for (uint256 i = 0; i < allAccounts.length; i++) {
                matches.push(allAccounts[i].userAddress);
            }
            allAccounts.push(
                AccountDetails(
                    msg.sender,
                    _firstname,
                    _lastname,
                    _age,
                    _bio,
                    _email,
                    tops,
                    tempAddress,
                    tempAddress,
                    tempAddress,
                    matches
                )
            );

            //Adding the new user to other users' recommendations list
            updatePossibleMatches(msg.sender);
        } else {
            revert("Account already exists");
        }
    }

    //Function to get the index of the user
    function getUser(address _address) public view returns (int256) {
        for (uint256 i = 0; i < allAccounts.length; i++) {
            if (allAccounts[i].userAddress == _address) {
                return int256(i);
            }
        }
        return -1;
    }

    //getting the list of all possible matches for the given user
    function getRecommendations(address _user)
        public
        view
        returns (address[] memory)
    {
        return allAccounts[uint256(getUser(_user))].possibleMatches;
    }

    //Function to add a user to other users' recommendations list
    function updatePossibleMatches(address _address) internal {
        uint256 i = 0;
        while (i < allAccounts.length) {
            if (allAccounts[i].userAddress != _address) {
                allAccounts[i].possibleMatches.push(_address);
            }
            i++;
        }
    }

    // Function to add users to the liked list

    function likeAccount(address _address) public {
        uint256 myAccountIndex = uint256(getUser(msg.sender));
        uint256 likedAccount = uint256(getUser(_address));
        //Adding to likedAccounts list
        allAccounts[myAccountIndex].likedAccounts.push(_address);

        //Removing the account from recommendations
        removeRecommendations(_address);

        //Checking if the other person has liked this account
        for (
            uint256 i = 0;
            i < allAccounts[likedAccount].likedAccounts.length;
            i++
        ) {
            if (allAccounts[likedAccount].likedAccounts[i] == msg.sender) {
                //Update list of both the accounts
                allAccounts[myAccountIndex].matchedAccounts.push(_address);
                allAccounts[likedAccount].matchedAccounts.push(msg.sender);
                break;
            }
        }
    }

    //Function to add users to rejctedAccounts

    function rejectAccount(address _address) public {
        uint256 myAccountIndex = uint256(getUser(msg.sender));
        //Adding to rejectedAccounts list
        allAccounts[myAccountIndex].rejectedAccounts.push(_address);

        //Removing the account from recommendations
        removeRecommendations(_address);
    }

    //Function to remove account from recommendations

    function removeRecommendations(address _address) internal {
        uint256 myAccountIndex = uint256(getUser(msg.sender));
        for (
            uint256 i = 0;
            i < allAccounts[myAccountIndex].possibleMatches.length;
            i++
        ) {
            if (allAccounts[myAccountIndex].possibleMatches[i] == _address) {
                while (
                    i < allAccounts[myAccountIndex].possibleMatches.length - 1
                ) {
                    allAccounts[myAccountIndex]
                        .possibleMatches[i] = allAccounts[myAccountIndex]
                        .possibleMatches[i + 1];
                    i++;
                }
                delete allAccounts[myAccountIndex]
                    .possibleMatches[allAccounts[myAccountIndex]
                    .possibleMatches
                    .length];
                break;
            }
        }
    }

    //Function to verify the topics
    function verifyTopics(string[] memory topics) public view {
        for (uint256 i = 0; i < topics.length; i++) {
            uint256 j = 0;
            while (
                j < allTopics.length &&
                (keccak256(abi.encodePacked(topics[i])) !=
                    keccak256(abi.encodePacked(allTopics[j])))
            ) {
                j++;
            }
            if (
                keccak256(abi.encodePacked(topics[i])) ==
                keccak256(abi.encodePacked(allTopics[j]))
            ) {
                continue;
            } else if (
                (keccak256(abi.encodePacked(topics[i])) !=
                    keccak256(abi.encodePacked(allTopics[j]))) &&
                (j == allTopics.length)
            ) {
                revert("Invalid topic");
            }
        }
    }

    //Function to get the details of current user
    function getMyDetails() public view returns (AccountDetails memory) {
        return allAccounts[uint256(getUser(msg.sender))];
    }
}
