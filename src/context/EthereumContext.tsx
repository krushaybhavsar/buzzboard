import { createContext, useEffect, useState } from 'react';

export const EthereumContext = createContext({
  isLoading: false,
  currentAccount: undefined as string | undefined,
  connectWallet: () => {},
});

type EthereumProviderProps = {
  children: React.ReactNode;
};

export const EthereumProvider = (props: EthereumProviderProps) => {
  const [metamaskInstalled, setMetamaskInstalled] = useState(false);
  const [currentAccount, setCurrentAccount] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (window && window.ethereum) {
      setMetamaskInstalled(true);
      if (window.ethereum.selectedAddress) {
        setCurrentAccount(window.ethereum.selectedAddress);
      }
    }
    setLoading(false);
  }, []);

  const connectWallet = async () => {
    if (!metamaskInstalled) return alert('Please install MetaMask to continue.');
    setLoading(true);
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <EthereumContext.Provider
      value={{
        isLoading: loading,
        currentAccount,
        connectWallet,
      }}
    >
      {props.children}
    </EthereumContext.Provider>
  );
};
