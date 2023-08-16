const hre = require("hardhat");
async function deployContract() {
  const escrow = await hre.ethers.getContractFactory("Escrow");
  const escrowContract = await escrow.deploy(
    "0x94D4449D427c8F7f098dCa1A8BeCf1326733eD7e",
    "0x440d05eD1Ea7a084Bc864af8cE4aD9B9b7f1b41e"
  );
}

deployContract().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
