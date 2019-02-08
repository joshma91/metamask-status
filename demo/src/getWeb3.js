import Web3 from "web3";

let web3;
// Modern dapp browsers...
if (typeof window !== "undefined" && window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    // Request account access if needed
    window.ethereum.enable();
    // Acccounts now exposed
  } catch (error) {
    throw error;
  }
}
// Legacy dapp browsers...
else if (typeof window !== "undefined" && window.web3) {
  // Use Mist/MetaMask's provider.
  web3 = window.web3;
  console.log("Injected web3 detected.");
}

export default web3;
