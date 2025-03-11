import BankBalanceView from '@/components/LandingScreen/BankBalanceView';
import DisconnectedWalletView from '@/components/LandingScreen/DisconnectedWalletView';
import LeaderboardView from '@/components/LandingScreen/LeaderboardView';
import YourBalanceView from '@/components/LandingScreen/YourBalanceView';
import { TypographyH1 } from '@/components/ui/typography';
import { EthereumContext } from '@/context/EthereumContext';
import { useContext } from 'react';

const LandingScreen = () => {
  const ethereum = useContext(EthereumContext);
  const gradientBg =
    'bg-[hsla(0,0%,100%,1)] bg-[radial-gradient(at_40%_20%,_hsla(28,100%,74%,1)_0px,_transparent_50%),radial-gradient(at_80%_0%,_hsla(189,100%,56%,1)_0px,_transparent_50%),radial-gradient(at_0%_50%,_hsla(355,100%,93%,1)_0px,_transparent_50%),radial-gradient(at_80%_50%,_hsla(340,100%,76%,1)_0px,_transparent_50%),radial-gradient(at_0%_100%,_hsla(22,100%,77%,1)_0px,_transparent_50%),radial-gradient(at_80%_100%,_hsla(242,100%,70%,1)_0px,_transparent_50%),radial-gradient(at_0%_0%,_hsla(343,100%,76%,1)_0px,_transparent_50%)]';

  return (
    <div
      className={
        'landing-screen flex flex-col w-full h-full items-center justify-start m-auto pt-[var(--navbar-height)] px-6 overflow-y-auto ' +
        gradientBg
      }
      style={{ justifyContent: ethereum.currentAccount ? 'start' : 'center' }}
    >
      {ethereum.currentAccount ? (
        <div className='flex flex-col gap-8 w-full'>
          <TypographyH1 className='text-center'>Leaderboard</TypographyH1>
          <div className='flex flex-row gap-8 w-full justify-center'>
            <div className='flex flex-col gap-8'>
              <YourBalanceView />
              <BankBalanceView />
            </div>
            <LeaderboardView />
          </div>
        </div>
      ) : (
        <DisconnectedWalletView />
      )}
    </div>
  );
};

export default LandingScreen;
