require("dotenv").config();

function validateConfig() {
  // Check .env  
  return true;
}

validateConfig();

const networkConfig = {  
  hardhat: {},
  mumbai: {/*...*/}     
};

module.exports = {
  // ...
  networks: {
    hardhat: { }, // Local setup      
    mumbai: {
      url: MUMBAI_RPC_URL,  
      accounts: [MUMBAI_TESTNET_PRIVATE_KEY] 
    }     
  }
}

// .env


async function run() {
  // Deploy, test, etc...  
}   

run()  
  .catch(e => {    
    console.error(e);
    process.exit(1);     
  });

try {
  // config logic
} catch (e) {
  console.error("Config error!", e);  
  process.exit(1);       
}