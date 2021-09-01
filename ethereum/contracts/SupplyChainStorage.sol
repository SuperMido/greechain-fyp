pragma solidity ^0.4.23;

import "./SupplyChainStorageOwnable.sol";

contract SupplyChainStorage is SupplyChainStorageOwnable {
    
    address public lastAccess;
    constructor() public {
        authorizedCaller[msg.sender] = 1;
        emit AuthorizedCaller(msg.sender);
    }
    
    /* Events */
    event AuthorizedCaller(address caller);
    event DeAuthorizedCaller(address caller);
    
    /* Modifiers */
    
    modifier onlyAuthCaller(){
        lastAccess = msg.sender;
        require(authorizedCaller[msg.sender] == 1);
        _;
    }
    
    /* User Related */
    struct user {
        string name;
        string contactNo;
        bool isActive;
        string profileHash;
    } 
    
    mapping(address => user) userDetails;
    mapping(address => string) userRole;
    
    /* Caller Mapping */
    mapping(address => uint8) authorizedCaller;
    
    /* authorize caller */
    function authorizeCaller(address _caller) public onlyOwner returns(bool) 
    {
        authorizedCaller[_caller] = 1;
        emit AuthorizedCaller(_caller);
        return true;
    }
    
    /* deauthorize caller */
    function deAuthorizeCaller(address _caller) public onlyOwner returns(bool) 
    {
        authorizedCaller[_caller] = 0;
        emit DeAuthorizedCaller(_caller);
        return true;
    }
    
    
    /* Process Related */
     struct basicDetails {
        string registrationNo;
        string farmerName;
        string farmAddress;
        string exporterName;
        string importerName;
        
    }
    
    struct farmInspector {
        string coffeeFamily;
        string typeOfSeed;
        string fertilizerUsed;
    }
    
    struct harvester {
        string cropVariety;
        string temperatureUsed;
        string humidity;
    }    
    
    struct exporter {
        string destinationAddress;
        string shipName;
        string shipNo;
        uint256 quantity;
        uint256 departureDateTime;
        uint256 estimateDateTime;
        uint256 plantNo;
        uint256 exporterId;
    }
    
    struct importer {
        uint256 quantity;
        uint256 arrivalDateTime;
        uint256 importerId;
        string shipName;
        string shipNo;
        string transportInfo;
        string warehouseName;
        string warehouseAddress;
    }
    
    struct processor {
        uint256 quantity;
        uint256 rostingDuration;
        uint256 packageDateTime;
        string temperature;
        string internalBatchNo;
        string processorName;
        string processorAddress;
    }
    
    mapping (address => basicDetails) batchBasicDetails;
    mapping (address => farmInspector) batchFarmInspector;
    mapping (address => harvester) batchHarvester;
    mapping (address => exporter) batchExporter;
    mapping (address => importer) batchImporter;
    mapping (address => processor) batchProcessor;
    mapping (address => string) nextAction;
    
    /*Initialize struct pointer*/
    user userDetail;
    basicDetails basicDetailsData;
    farmInspector farmInspectorData;
    harvester harvesterData;
    exporter exporterData;
    importer importerData;
    processor processorData; 
    

    /* Get User Role */
    function getUserRole(address _userAddress) public onlyAuthCaller view returns(string)
    {
        return userRole[_userAddress];
    }
    
    /* Get Next Action  */    
    function getNextAction(address _batchNo) public onlyAuthCaller view returns(string)
    {
        return nextAction[_batchNo];
    }
        
    /*set user details*/
    function setUser(address _userAddress,
                     string _name, 
                     string _contactNo, 
                     string _role, 
                     bool _isActive,
                     string _profileHash) public onlyAuthCaller returns(bool){
        
        /*store data into struct*/
        userDetail.name = _name;
        userDetail.contactNo = _contactNo;
        userDetail.isActive = _isActive;
        userDetail.profileHash = _profileHash;
        
        /*store data into mapping*/
        userDetails[_userAddress] = userDetail;
        userRole[_userAddress] = _role;
        
        return true;
    }  
    
    /*get user details*/
    function getUser(address _userAddress) public onlyAuthCaller view returns(string name, 
                                                                    string contactNo, 
                                                                    string role,
                                                                    bool isActive, 
                                                                    string profileHash
                                                                ){

        /*Getting value from struct*/
        user memory tmpData = userDetails[_userAddress];
        
        return (tmpData.name, tmpData.contactNo, userRole[_userAddress], tmpData.isActive, tmpData.profileHash);
    }
    
  
}  