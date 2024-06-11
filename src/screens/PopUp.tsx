import React, { useEffect } from "react";
import "./PopUp.css";

import WalletDetail from "./WalletDetail";

import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface PopUpProps {
  isOpenBuy: boolean;
  setIsOpenBuy: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  walletName: string;
}
import { useNavigate } from "react-router-dom";

const PopUp: React.FC<PopUpProps> = (props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const { isOpenBuy, setIsOpenBuy, walletName, setIsRunning } = props;

  const navigate = useNavigate();

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpenBuy(false);
      navigate("/");
      setIsRunning(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    isOpenBuy && (
      <div className="relative  flex items-center justify-center">
        <div className="overlay bg-opacity-10 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="dialog relative font-Mont w-[90%] md:w-[400px] border-white border-2 rounded-lg bg-[#04011C] text-white"
          >
            <FontAwesomeIcon
              onClick={() => {
                setIsOpenBuy(false);
                navigate("/");
                setIsRunning(true);
              }}
              icon={faArrowLeft}
              size="lg"
              className="cursor-pointer"
            />

            <WalletDetail walletName={walletName} />
          </div>
        </div>
      </div>
    )
  );
};

export default PopUp;
