// Require dependencies
const { ethers } = require("hardhat");

// Validate .env 
function validateConfig() {
  if (!process.env.API_KEY) {
    console.error("API key not set!"); 
    process.exit(1);
  }  
}

validateConfig();

// Deploy contract function
async function deployContract() {

  const contractName = "AMBPay";  
  const unambpayTime = Date.now();  
  const ambpayAmount = ethers.utils.parseEther("0.01");
  
  console.log(`Deploying ${contractName} with:
  - Timestamp: ${unambpayTime}   
  - Amount: ${ambpayAmount}`);
  
  try {
    const deployment = await hre.ethers.deployContract(
      // Contract details...    
    );
    console.log(`Contract deployed at ${deployment.address}!`);
  } catch (error) {
    console.log(error);  
    process.exit(1);
  }
}

deployContract()
  .then(() => process.exit(0))  
  .catch(error => {
    console.error(error);    
    process.exit(1);     
  });