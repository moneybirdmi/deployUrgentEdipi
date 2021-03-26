const localDeployScript = async (deployer, user) => {
  console.log('Deploying to local blockchain');
  await deployer.deploy(EDIPI, user);
  console.log('EDIPI.address: ', EDIPI.address);
};

const testnetDeployScript = async (deployer, user) => {
  console.log('Deploying to testnet');
  await deployer.deploy(EDIPI, user);
  console.log('EDIPI.address: ', EDIPI.address);
};

const mainnetDeployScript = async (deployer, user) => {
  console.log('Deploying to Mainnet');
  await deployer.deploy(EDIPI, user);
  console.log('EDIPI.address: ', EDIPI.address);
};

module.exports = async (deployer, network, addresses) => {
  let [user] = addresses;
  user = '0xcF01971DB0CAB2CBeE4A8C21BB7638aC1FA1c38c';

  console.log('user: ', user);
  console.log('network: ', network);

  switch (network) {
    case 'mainnet':
      await mainnetDeployScript(deployer, user);
      break;

    case 'bscTestnet':
    case 'kovan':
      await testnetDeployScript(deployer, user);
      break;

    case 'development':
    case 'develop':
    default:
      await localDeployScript(deployer, user);
      break;
  }
};

const EDIPI = artifacts.require('EDIPI');
