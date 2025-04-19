import React from "react";
import { ConnectButton } from "@mysten/dapp-kit";
import "./CustomConnectButton.css";

export default function CustomConnectButton() {
  return (
    <div className="custom-connect-button flex py-[0.625rem] px-[1.25rem] gap-[0.625rem] justify-center items-center shrink-0 flex-nowrap bg-[#4da2ff] rounded-[3.125rem] relative z-[17]">
      <ConnectButton connectText="Connect wallet" />
    </div>
  );
}
