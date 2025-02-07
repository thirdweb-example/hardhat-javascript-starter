const hre = require("hardhat");

async function main() {
  const contractAddress = "<YOUR CONTRACT ADDRESS>";
  const constructorArgs = [];

  console.log("Verifying contract.");
  await verify(
    contractAddress,
    "contracts/Contract.sol:MyContract",
    constructorArgs
  );
}

async function verify(address, contract, args) {
  try {
    return await hre.run("verify:verify", {
      address: address,
      contract: contract,
      constructorArguments: args,
    });
  } catch (e) {
    console.log(address, args, e);
  }
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
