import { isValidAddress } from '@/utils/buzzcoinUtils';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

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
        if (isValidAddress(window.ethereum.selectedAddress)) {
          setCurrentAccount(window.ethereum.selectedAddress);
        } else {
          toast('Address not allowed!', {
            description: 'Please connect with the Ethereum address given to you.',
          });
        }
      }
    }
    setLoading(false);
  }, []);

  const connectWallet = async () => {
    if (!metamaskInstalled)
      return toast('Metamask not installed!', {
        description: 'Please install Metamask to continue.',
      });
    setLoading(true);
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      if (isValidAddress(accounts[0])) {
        setCurrentAccount(accounts[0]);
      } else {
        toast('Address not allowed!', {
          description: 'Please connect with the Ethereum address given to you.',
        });
      }
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
