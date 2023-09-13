// script.js
document.addEventListener("DOMContentLoaded", async () => {
  const dataElement = document.getElementById("data");
  const getDataButton = document.getElementById("getData");

  // Replace with the deployed contract address
  const contractAddress = "CONTRACT_ADDRESS";
  const abi = [...]; // Paste the ABI of your contract here

  const provider = new ethers.providers.JsonRpcProvider("YOUR_INFURA_RINKEBY_URL");
  const contract = new ethers.Contract(contractAddress, abi, provider);

  getDataButton.addEventListener("click", async () => {
    const data = await contract.getData();
    dataElement.textContent = data.toString();
  });
});

