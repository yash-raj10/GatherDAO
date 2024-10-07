const hre = require("hardhat");

async function main() {
  const GatherDAO = await hre.ethers.getContractFactory("GatherDAO");
  const gatherDAO = await GatherDAO.deploy();

  await gatherDAO.deployed();

  console.log(`GatherDAO deployed tp ${gatherDAO.address} `);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Account #19: 0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199 (10000 ETH)
// Private Key: 0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e

// 0x5FbDB2315678afecb367f032d93F642f64180aa3
