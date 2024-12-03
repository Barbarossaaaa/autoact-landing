import React, { useEffect, ChangeEvent, useState } from 'react';
import BgImage from './assets/main_demo.png'
import { ReactComponent as GrayLogo } from './assets/automata_logo.svg'
import { ReactComponent as Hamburger } from './assets/hamburger.svg'
import { ReactComponent as Cross } from './assets/cross.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';

import { ApiPromise, WsProvider } from '@polkadot/api';
import { ContractPromise } from '@polkadot/api-contract';
import ABI from './abi.json'; // Add your contract's ABI JSON here.

import '@polkadot/api-augment';
import { PinataSDK } from "pinata-web3"

import { Signer } from '@polkadot/api/types';
import { web3FromAddress } from '@polkadot/extension-dapp';


const contractAddress = 'a351sfaLWYh5yFN9DTU3yoZ9JZSd8J9X58PBAjzG5wSL8c4';




const AppPage = ({ selectedAccount, signer }) => {
  const accountAddress = selectedAccount?.address || '';
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    shortDescription: "",
    projectScript: "",
  });
  const [ipfsHash, setIpfsHash] = useState('');
  const [transactionBlock, setTransactionBlock] = useState('');


  const resetForm = () => {
    setFormData({
      projectName: "",
      shortDescription: "",
      projectScript: "",
    });
    setSelectedFile(null);
  };
  const mintToken = async (
    tokenId: number,
    tokenUri: string,
    accountAddress: string,
    signer: Signer
  ) => {
    try {
      // Connect to the Astar WebSocket endpoint
      const provider = new WsProvider('wss://astar.public.curie.radiumblock.co/ws');
      const api = await ApiPromise.create({ provider });
  
      // Instantiate the contract interface
      const contract = new ContractPromise(api, ABI, contractAddress);
  
      // Specify the `mint` method arguments
      const args = [tokenId, tokenUri];
  
      // Query gas estimation for the call
      const { gasRequired } = await contract.query.mint(
        accountAddress,
        { value: 0, gasLimit: -1 },
        ...args
      );
  
      // Call the `mint` method
      const tx = contract.tx.mint(
        { gasLimit: gasRequired, value: 0 },
        ...args
      );
  
      // Sign and send the transaction
      const unsub = await tx.signAndSend(
        accountAddress,
        { signer },
        (result) => {
          if (result.status.isInBlock) {
              const blockHash = result.status.asInBlock.toHex();
              setTransactionBlock(blockHash);
              resetForm();
            console.log('Transaction included at blockHash', result.status.asInBlock.toHex());
          } else if (result.status.isFinalized) {
            console.log('Transaction finalized at blockHash', result.status.asFinalized.toHex());
            unsub();
          }
        }
      );
    } catch (error) {
      console.error('Error during mint call:', error);
    }
  };
  

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const pinata = new PinataSDK({
    pinataJwt: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIxZGFjNzFhNy0yOWIyLTQ5NWEtOTMwOS1kYmRlMzlhZmU4ODMiLCJlbWFpbCI6InZhaWJoYXYuZGttQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJiMzRhYTMwMjNiOGIyMGQ4MGE0ZCIsInNjb3BlZEtleVNlY3JldCI6IjBmMzc4ODgxMTkzNGE4MDZkZjAxOGFmODNkNDJjZDU3YWQ4MmVkZDZmZDNjZTE0ODRhYThhOWFlNTBjZjRjYTUiLCJleHAiOjE3NjQ3NDQzNDl9.SSbiUEeSveRfeGW96WXx08dZyeHdaishdRGdz3gUXqM`,
    pinataGateway: `orange-quiet-toad-977.mypinata.cloud`
  })
  
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!selectedFile) {
        console.error("No file selected");
        return;
      }
  
      // Convert the uploaded file (image) to Base64
      const fileReader = new FileReader();
      fileReader.onloadend = async () => {
        const base64Image = fileReader.result;
  
        if (typeof base64Image !== "string") {
          console.error("Failed to convert image to Base64");
          return;
        }
  
        // Combine form data and Base64 image into a JSON object
        const combinedData = {
          projectName: formData.projectName,
          shortDescription: formData.shortDescription,
          projectScript: formData.projectScript,
          image: base64Image, // Include the Base64-encoded image
        };
  
        console.log("Combined Data:", combinedData);
  
        try {
          const file = new File(
            [JSON.stringify(combinedData)],
            "Testing.json",
            { type: "application/json" }
          );
          const upload = await pinata.upload.file(file);
          console.log("File uploaded successfully:", upload.IpfsHash);
           setIpfsHash(upload.IpfsHash);
        
          
  
          // Call mintToken with the IPFS hash as tokenUri
          const tokenId = 1; // Replace with logic to generate unique tokenId
          const tokenUri = upload.IpfsHash;
  
          await mintToken(tokenId, tokenUri, accountAddress, signer);
        } catch (error) {
          console.error("Error during Pinata upload or minting:", error);
        }
      };
  
      // Start reading the file as Base64
      fileReader.readAsDataURL(selectedFile);
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };
  
  
  
  
  

  const toggleForm = () => setShowForm((prev) => !prev);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-6">
      <div className="w-full max-w-4xl">
      {(transactionBlock || ipfsHash) && (
                  <div className="bg-green-800 p-4 rounded-lg mb-6">
                    <h2 className="text-xl font-semibold mb-2">Transaction Successful!</h2>
                    {transactionBlock && (
                      <div className="mb-2">
                        <span className="font-semibold">Block Hash:</span>
                        <p className="break-all">{transactionBlock}</p>
                      </div>
                    )}
                    {ipfsHash && (
                      <div>
                        <span className="font-semibold">IPFS Hash:</span>
                        <p className="break-all">{ipfsHash}</p>
                        <a 
                          href={`https://gateway.pinata.cloud/ipfs/${ipfsHash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-300 hover:text-blue-400 underline mt-1 inline-block"
                        >
                          View on IPFS
                        </a>
                      </div>
                    )}
                  </div>
)}
       
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Project Scripts</h1>
          <button
            onClick={toggleForm}
            className="px-6 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold"
          >
            {showForm ? "Cancel" : "New"}
          </button>
        </div>
        {showForm && (
          <form className="bg-gray-900 rounded-lg p-6 space-y-4" onSubmit={handleSubmission}>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Project Name</label>
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded bg-gray-800 text-gray-100 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Upload Image</label>
              <input
                type="file"
                onChange={handleFileChange}
                required
                className="w-full p-3 rounded bg-gray-800 text-gray-100 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Short Description</label>
              <input
                type="text"
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded bg-gray-800 text-gray-100 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Project Script</label>
              <textarea
                name="projectScript"
                value={formData.projectScript}
                onChange={handleInputChange}
                rows={5}
                required
                className="w-full p-3 rounded bg-gray-800 text-gray-100 focus:outline-none"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold"
              >
                Submit Script
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};




const HomePage = () => (
  <>
      

     
      <section
  className="relative text-white"
  style={{
    backgroundImage: `
      url(${BgImage})
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '105vw', // Use 100vw to cover the entire screen width
    marginLeft: '-8px', // Ensure no unintended margins
    padding: 0, // Ensure no unintended padding
    overflow: 'hidden', // Prevent horizontal scrollbar
  }}
>
</section> 
      
    
    </>
);

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta | undefined>(
    undefined
  );
  const [signer, setSigner] = useState<Signer | undefined>(undefined);


  const handleConnection = async () => {
    const extensions = await web3Enable('management-app');
    if (extensions.length === 0) {
      console.error('No extension installed');
      return;
    }
    const allAccounts = await web3Accounts();
    setAccounts(allAccounts);
  };

  const handleDisconnect = () => {
    setAccounts([]);
    setSelectedAccount(undefined);
    setSigner(undefined);
  };

  const handleAccountSelection = async (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedAddress = e.target.value; 
    console.log('what is selected', selectedAddress);
    const account = accounts.find(account => account.address === selectedAddress);
    console.log('selected', account?.address)

    setSelectedAccount(account);

    if (account) {
      // Get the signer
      const injector = await web3FromAddress(account.address);
      setSigner(injector.signer);
    }
  };

  return (
    <Router>
      <header className="bg-[#111826] text-white">
      <nav className="flex justify-between items-center w-full px-6 sm:py-2 -sm:px-0 lg:py-[10px] xl:py-[12.5px] 2xl:py-4">
      {/* LEFT: Logo + Name */}
      <a
        className="flex w-max justify-start items-center gap-4 pointer-events-auto"
        href="/"
      >
        <GrayLogo className="h-[24px] md:h-[28px] xl:h-[36px] mac:h-[40px] 2xl:h-[56px] w-auto" />
        <span className="font-bold">AUTOACT.NETWORK</span>
      </a>

      {/* Hamburger Menu (Visible on small screens only) */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="flex items-center text-white pointer-events-auto focus:outline-none"
        >
          {isMenuOpen ? (
            <Cross className="w-5 h-5" />
          ) : (
            <Hamburger className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* RIGHT: NavLinks + Connect/Disconnect Button */}
      <div className="hidden lg:flex w-max justify-end items-center lg:gap-8 mac:gap-9 2xl:gap-10 font-regular text-sm mac:text-base 2xl:text-lg text-white">
        <a className={`hover:underline hover:underline-offset-4 pointer-events-auto`} href="/">
          Home
        </a>
        <a className={`hover:underline hover:underline-offset-4 pointer-events-auto`} href="/about">
          Tutorial
        </a>
        <a
          className="hover:underline hover:underline-offset-4 pointer-events-auto"
          href="https://twitter.com/kleo_network"
          target="_blank"
        >
          Twitter ↗
        </a>
        <a
          className="hover:underline hover:underline-offset-4 pointer-events-auto"
          href="https://discord.gg/Qn6ZmecTEw"
          target="_blank"
        >
          Discord ↗
        </a>

        {/* Connect/Disconnect Button */}
        <div className="flex items-center gap-4">
          {accounts.length > 0 ? (
            <button
              onClick={handleDisconnect}
              className="h-fit px-[14px] py-2 lg:px-[18px] rounded-lg bg-red-500 cursor-pointer hover:bg-red-600 font-semibold text-sm mac:text-base 2xl:text-lg text-white pointer-events-auto"
            >
              Disconnect
            </button>
          ) : (
            <button
              onClick={handleConnection}
              className="h-fit px-[14px] py-2 lg:px-[18px] rounded-lg bg-white cursor-pointer hover:bg-white/50 font-semibold text-sm mac:text-base 2xl:text-lg text-primary-800 pointer-events-auto"
            >
              Connect
            </button>
          )}
          {accounts.length > 0 && (
            <select
              onChange={handleAccountSelection}
              defaultValue=""
              className="bg-gray-800 text-white rounded px-4 py-2 focus:outline-none"
            >
              <option value="" disabled hidden>
                Choose Account
              </option>
              {accounts.map((account) => (
                <option key={account.address} value={account.address}>
                  {account.meta.name || account.address}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* Mobile Menu (Visible when menu is open) */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:hidden absolute top-full left-0 w-full flex flex-col items-center bg-gray-800 text-white p-6 space-y-4`}
      >
        <a className={`block hover:underline pointer-events-auto`} href="/">
          Home
        </a>
        <a className={`block hover:underline pointer-events-auto`} href="/about">
          Tutorial
        </a>
        <a
          className="block hover:underline pointer-events-auto"
          href="https://twitter.com/kleo_network"
          target="_blank"
        >
          Twitter ↗
        </a>
        <a
          className="block hover:underline pointer-events-auto"
          href="https://discord.gg/Qn6ZmecTEw"
          target="_blank"
        >
          Discord ↗
        </a>
        {accounts.length > 0 ? (
          <button
            onClick={handleDisconnect}
            className="block h-12 px-5 py-3 rounded-lg bg-red-500 cursor-pointer hover:bg-red-600 font-semibold text-base text-white pointer-events-auto"
          >
            Disconnect
          </button>
        ) : (
          <button
            onClick={handleConnection}
            className="block h-12 px-5 py-3 rounded-lg bg-white cursor-pointer hover:bg-white/50 font-semibold text-base text-primary-800 pointer-events-auto"
          >
            Connect
          </button>
        )}
      </div>
    </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/app"
          element={<AppPage selectedAccount={selectedAccount} signer={signer} />}
        />
      </Routes>
    </Router>
  );
}

export default App;