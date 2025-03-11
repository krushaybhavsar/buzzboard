import { formatBalance, getBalance } from '@/utils/buzzcoinUtils';
import { LoaderCircle, PiggyBank } from 'lucide-react';
import { useEffect, useState } from 'react';
import { TypographyH3, TypographyP } from '../ui/typography';
import { bankAddress } from '@/utils/constants';

const BankBalanceView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    getBalance(bankAddress).then((balance) => {
      setBalance(balance);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className='sticky top-64 bg-card p-8 rounded-sm shadow-sm gap-4 flex flex-col justify-center items-center text-center'>
      <div className='flex justify-center items-center rounded-full border-primary border-[1.5px] p-3.5'>
        <PiggyBank strokeWidth={1.5} />
      </div>
      <div className='flex flex-col gap-1 justify-center items-center'>
        <TypographyP>Buzzcoin Bank</TypographyP>
        {isLoading ? (
          <LoaderCircle className='animate-spin duration-500' strokeWidth={1} />
        ) : (
          <TypographyH3 className='!font-[500]'>{formatBalance(balance)}</TypographyH3>
        )}
      </div>
    </div>
  );
};

export default BankBalanceView;
