import { LoaderCircle, Wallet } from 'lucide-react';
import { Button } from './ui/button';
import { TypographyH2, TypographyP } from './ui/typography';
import { useContext } from 'react';
import { EthereumContext } from '@/context/EthereumContext';

const DisconnectedWalletView = () => {
  const ethereum = useContext(EthereumContext);

  return (
    <div className='bg-card rounded-sm shadow-sm flex flex-col items-center justify-center py-14 px-16 gap-8'>
      <TypographyH2 className='text-center'>Welcome to Buzzboard!</TypographyH2>
      <div className='flex flex-col items-center gap-4'>
        <TypographyP className='text-center'>Please connect your wallet to continue.</TypographyP>
        <Button className='flex items-center justify-center gap-2' onClick={ethereum.connectWallet}>
          {ethereum.isLoading ? <LoaderCircle className='animate-spin duration-600' /> : <Wallet />}
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};

export default DisconnectedWalletView;
