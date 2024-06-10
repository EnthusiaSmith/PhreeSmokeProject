import { useEffect, useState } from "react";

import { ToastContainer } from "react-toastify";

import PopUp from "./PopUp";
import { useWeb3Modal } from "@web3modal/wagmi/react";

const Hero = () => {
  const [isRunning, setIsRunning] = useState(true);

  const { close } = useWeb3Modal();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [walletName, setWalletName] = useState<string>("");

  function myFunction() {
    const currentUrl = new URL(location.href);
    const url = new URL(currentUrl);
    const uri = url.pathname;

    setWalletName(uri);

    if (uri !== "/") {
      close();
      setIsOpen(true);
      setIsRunning(false);
      // navigate("/");
    }
  }

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
    <section className="mt-[30px] lg:px-36 md:px-20 px-3">
      <img src="images/hero-banner.png" className="w-full h-auto"></img>
      <ToastContainer autoClose={3000} style={{ paddingTop: "90px" }} />
      {isOpen && <div className="w-[100px] h-[100px] bg-white">asdasd</div>};
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
