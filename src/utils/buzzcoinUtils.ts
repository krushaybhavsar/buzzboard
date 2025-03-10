import { Web3 } from 'web3';
import { validAddresses } from './constants';
import { toast } from 'sonner';

const rpcURL = window.location.href.includes('localhost')
  ? 'http://127.0.0.1:8545/rpc'
  : 'https://buzzboard.netlify.app/rpc';

const web3 = new Web3(rpcURL);

export type WalletBalance = {
  address: string;
  balance: number;
};

export const getAllBalances = async (sorted?: boolean): Promise<WalletBalance[]> => {
  try {
    const balances: WalletBalance[] = [];
    for (let i = 0; i < validAddresses.length; i++) {
      const balance = web3.utils.fromWei(await web3.eth.getBalance(validAddresses[i]), 'ether');
      balances.push({ address: validAddresses[i], balance: Number(balance) });
    }
    if (sorted) {
      balances.sort((a, b) => b.balance - a.balance);
    }
    return balances;
  } catch (error) {
    console.error('Error getting balances:', error);
    toast('Error fetching balances', {
      description: 'Try disabling your ad blocker or using Chrome with default security settings',
    });
    return [];
  }
};

export const getBalance = async (address: string): Promise<number> => {
  return Number(web3.utils.fromWei(await web3.eth.getBalance(address), 'ether'));
};

export const isValidAddress = (address: string): boolean => {
  return validAddresses.includes(address);
};
