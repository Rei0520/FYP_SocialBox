"use client";
import { useRouter } from "next/navigation";
import "./wallet.css";
import Modal from "react-modal";

export const Wallet = ({ isOpen, onRequestClose, inputs }: any) => {
  const router = useRouter();
  const handleClick = (e: any) => {
    localStorage.setItem("user", JSON.stringify({ ...inputs, wallet: e }));
    if (inputs.userType === "Creator") {

      router.push("/pages/creator");
    } else {
      router.push("/");

    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Connect your wallet"
      className="wallet"
      overlayClassName="Overlay"
    >
      <div className="WalletConnectModal">
        <div className="flex_center flex_column">
          <h2>Connect your wallet</h2>
          <p className="text_align">
            If you don't have a wallet, you can select a provider and create one
            now.
            <a href="#" className="learn-more">
              Learn more
            </a>
          </p>
        </div>
        <div className="wallet-list">
          <div
            onClick={() => handleClick("MetaMask")}
            className="wallet-item popular"
          >
            <span className="wallet-name">MetaMask</span>
            <span className="tag">POPULAR</span>
          </div>
          <div onClick={() => handleClick("Coinbase")} className="wallet-item">
            <span className="wallet-name">Coinbase Wallet</span>
          </div>
          <div
            onClick={() => handleClick("WalletConnect")}
            className="wallet-item"
          >
            <span className="wallet-name">WalletConnect</span>
          </div>
          <div onClick={() => handleClick("Ledger")} className="wallet-item">
            <span className="wallet-name">Ledger</span>
          </div>
          <div onClick={() => handleClick("Phantom")} className="wallet-item">
            <span className="wallet-name">Phantom</span>
          </div>
          <div onClick={() => handleClick("BitKeep")} className="wallet-item">
            <span className="wallet-name">BitKeep</span>
            <span className="tag">BNB CHAIN</span>
          </div>
        </div>
        <div className="flex_center">
          <button className="view-all ">View All</button>
        </div>
      </div>
    </Modal>
  );
};

export default Wallet;
