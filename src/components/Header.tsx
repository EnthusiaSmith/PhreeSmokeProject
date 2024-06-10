import { useEffect } from "react";

import { useWeb3Modal } from "@web3modal/wagmi/react";

const Header = () => {
  useEffect(() => {}, []);

  const { open } = useWeb3Modal();

  // Function to handle wallet selection
  const handleWalletSelection = async () => {
    try {
      open();
      // alert("Selected Wallet: ");
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  return (
    <header
      className={`bg-[#04011C] px-3 lg:px-36 md:px-25`}
      data-aos="fade-down"
    >
      <div className="flex px-10 mt-5 lg:px-36 md:px-20 justify-between">
        <div className="flex md:flex-row flex-col">
          <span className="text-white my-auto text-[30px] font-roboto">
            Web3Modal
          </span>
          <span className="text-gray-400 text-center bg-white bg-opacity-[15%] border-2 rounded-2xl px-2 md:ml-2 mx-auto md:my-auto border-gray-400 text-[20px]">
            4.2.3
          </span>
        </div>
        <div className="flex">
          <button
            onClick={handleWalletSelection}
            className="rounded-3xl my-auto text-white px-3 py-1 font-poppins hover:bg-blue-400 text-[20px] bg-blue-500"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
