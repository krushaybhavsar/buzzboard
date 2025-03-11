import { Web3 } from 'web3';
import { bankAddress, rpcURL, validAddresses } from './constants';
import { toast } from 'sonner';

const updatedRpcURL = window.location.href.includes('localhost')
  ? rpcURL
  : 'https://buzzboard.netlify.app/rpc';

let web3: Web3;

try {
  web3 = new Web3(updatedRpcURL);
} catch (error) {
  console.error('Error creating Web3 instance:', error);
  toast('Error creating Web3 instance', {
    description: 'Try disabling your ad blocker or using Chrome with default security settings',
  });
}

export type WalletBalance = {
  address: string;
  balance: number;
};

export const getAllBalances = async (
  sorted?: boolean,
  includeBank?: boolean,
): Promise<WalletBalance[]> => {
  try {
    const balances: WalletBalance[] = [];
    for (let i = 0; i < validAddresses.length; i++) {
      if (!includeBank && validAddresses[i] === bankAddress) {
        continue;
      }
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

export const formatBalance = (balance: number, full?: boolean): string => {
  let balanceString = balance.toString();
  let whole = balanceString.split('.')[0];
  let decimal = balanceString.split('.')[1];

  if (!decimal) {
    decimal = '0000';
  }

  if (!full) {
    // truncate to 4 decimal points
    decimal = decimal.slice(0, 4);
  }

  // add commas for thousands separator using regex.
  whole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const formattedAmount = whole + '.' + decimal;

  return formattedAmount + ' Buzz';
};
