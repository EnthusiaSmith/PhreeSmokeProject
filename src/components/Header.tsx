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
      className={`bg-[#04011C] px-3 lg:px-15 md:px-5 mt-10`}
      // data-aos="fade-down"
    >
      <div className="flex px-3 mt-5 justify-between">
        <div className="w-1/4 text-right sm:block hidden ">
          <span className=" text-[30px] text-[#5599ee] text-opacity-60 font-roboto">
            DOC
          </span>
        </div>
        <div className="flex w-auto sm:w-1/2 sm:mx-10 flex-col">
          <img
            src="/images/logo.png"
            className="w-[120px] sm:w-[150px] mx-0 sm:mx-auto"
            alt="Image"
          ></img>
          <p className="text-[#5599ee] sm:block hidden my-1 text-[37px] mx-auto">
            WalletConnect
          </p>
          <p className="text-[23px] sm:block hidden text-center text-gray-400 mx-auto ">
            Open protocol for connecting Wallets to Dapps
          </p>
        </div>
        <div className="my-auto sm:w-1/4 text-left sm:my-0">
          <button
            onClick={handleWalletSelection}
            className="rounded-2xl text-center text-white px-3 py-1 font-poppins bg-[#5599ee] bg-opacity-50 hover:bg-opacity-100 text-[23px] "
          >
            <span>Connect</span>
            <br className="lg:hidden block" />
            <span>&nbsp;</span>
            <span>Wallet</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
