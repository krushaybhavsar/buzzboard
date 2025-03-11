import { useContext, useEffect, useState } from 'react';
import { TypographyH3, TypographyP } from '../ui/typography';
import { getBalance } from '@/utils/buzzcoinUtils';
import { EthereumContext } from '@/context/EthereumContext';
import { LoaderCircle, Wallet } from 'lucide-react';

const YourBalanceView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [balance, setBalance] = useState(0);
  const ethereum = useContext(EthereumContext);

  useEffect(() => {
    if (!ethereum.currentAccount) return;
    getBalance(ethereum.currentAccount).then((balance) => {
      setBalance(balance);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className='sticky top-8 bg-card p-8 rounded-sm shadow-sm gap-4 flex flex-col justify-center items-center text-center'>
      <div className='flex justify-center items-center rounded-full border-primary border-[1.5px] p-3.5'>
        <Wallet strokeWidth={1.5} />
      </div>
      <div className='flex flex-col gap-1 justify-center items-center'>
        <TypographyP>Your Balance</TypographyP>
        {isLoading ? (
          <LoaderCircle className='animate-spin duration-500' strokeWidth={1} />
        ) : (
          <TypographyH3 className='!font-[500]'>{balance} Buzz</TypographyH3>
        )}
      </div>
    </div>
  );
};

export default YourBalanceView;
