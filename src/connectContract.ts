import { ethers } from "ethers";

const connectContract = () => {
  const contractAddress = "0x94D0F59E3cf56537C32D6e2BD4Ba860F5A76659E";
  const contractABI = require("../src/ABI.json");
  let blacklistContract;
  try {
    const { ethereum } = window;

    if (ethereum.chainId === "0x13881") {
      //checking for eth object in the window, see if they have wallet connected to Mumbai network
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      console.log("contractABI", contractABI);
      blacklistContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      ); // instantiating new connection to the contract
    } else {
      throw new Error("Please connect to the Polygon Mumbai network.");
    }
  } catch (error) {
    console.log("ERROR:", error);
  }
  return blacklistContract;
};
