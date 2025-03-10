import { Web3 } from 'web3';
import { rpcURL, validAddresses } from './constants';

const web3 = new Web3({
  provider: new Web3.providers.HttpProvider(rpcURL),
});

export type WalletBalance = {
  address: string;
  balance: number;
};

export const getAllBalances = async (sorted?: boolean): Promise<WalletBalance[]> => {
  const balances: WalletBalance[] = [];
  for (let i = 0; i < validAddresses.length; i++) {
    const balance = web3.utils.fromWei(await web3.eth.getBalance(validAddresses[i]), 'ether');
    balances.push({ address: validAddresses[i], balance: Number(balance) });
  }
  if (sorted) {
    balances.sort((a, b) => b.balance - a.balance);
  }
  return balances;
};

export const getBalance = async (address: string): Promise<number> => {
  return Number(web3.utils.fromWei(await web3.eth.getBalance(address), 'ether'));
};

export const isValidAddress = (address: string): boolean => {
  return validAddresses.includes(address);
};
