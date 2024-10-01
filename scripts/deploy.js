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
