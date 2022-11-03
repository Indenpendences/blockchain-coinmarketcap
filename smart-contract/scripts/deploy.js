const { ethers } = require("hardhat");

const main = async function () {
  try {
    const DaiFactory = await ethers.getContractFactory("Dai");
    const daiContract = await DaiFactory.deploy();
    await daiContract.deployed();
    console.log("Dai address: " + daiContract.address);
    const DogeCoinFactory = await ethers.getContractFactory("DogeCoin");
    const dogeCoinContract = await DogeCoinFactory.deploy();
    await dogeCoinContract.deployed();
    console.log("DogeCoin address: " + dogeCoinContract.address);
    const LinkFactory = await ethers.getContractFactory("Link");
    const linkContract = await LinkFactory.deploy();
    await linkContract.deployed();
    console.log("Link address: " + linkContract.address);
    const IndependenceFactory = await ethers.getContractFactory("Independence");
    const independenceContract = await IndependenceFactory.deploy();
    await independenceContract.deployed();
    console.log("Independence address: " + independenceContract.address);
    const UsdcFactory = await ethers.getContractFactory("Usdc");
    const usdcContract = await UsdcFactory.deploy();
    await usdcContract.deployed();
    console.log("USDC address:" + usdcContract.address);
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
