import { useAddress, useNetworkMismatch, useNetwork, ConnectWallet, ChainId } from "@thirdweb-dev/react"
import React from 'react'

// type Props = {},

export default function SignInButton({ }: Props) {
  const address = useAddress()
  const isOnWrongNetwork = useNetworkMismatch()
  const [, switchNetwork] = useNetwork()

  // 1. User needs to connect their wallet
  if (!address) {
    return <ConnectWallet />;
  }

  // 2. User needs to switch network to Mumbai
  if (isOnWrongNetwork) {
    return (
      <button onClick={() => switchNetwork?.(ChainId.Mumbai)}>
        Switch Network
      </button>
    );
  }
}