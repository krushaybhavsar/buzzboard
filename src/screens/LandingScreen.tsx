import { Button } from '@/components/ui/button';
import { EthereumContext } from '@/context/EthereumContext';
import { useContext } from 'react';

const LandingScreen = () => {
  const ethereum = useContext(EthereumContext);
  const gradientBg =
    'bg-[hsla(0,0%,100%,1)] bg-[radial-gradient(at_40%_20%,_hsla(28,100%,74%,1)_0px,_transparent_50%),radial-gradient(at_80%_0%,_hsla(189,100%,56%,1)_0px,_transparent_50%),radial-gradient(at_0%_50%,_hsla(355,100%,93%,1)_0px,_transparent_50%),radial-gradient(at_80%_50%,_hsla(340,100%,76%,1)_0px,_transparent_50%),radial-gradient(at_0%_100%,_hsla(22,100%,77%,1)_0px,_transparent_50%),radial-gradient(at_80%_100%,_hsla(242,100%,70%,1)_0px,_transparent_50%),radial-gradient(at_0%_0%,_hsla(343,100%,76%,1)_0px,_transparent_50%)]';

  return (
    <div
      className={
        'landing-screen flex flex-col w-full h-full items-center justify-start m-auto pt-[var(--navbar-height)] ' +
        gradientBg
      }
    >
      {ethereum.currentAccount ? (
        <div>{ethereum.currentAccount}</div>
      ) : (
        <Button onClick={ethereum.connectWallet}>Connect Wallet</Button>
      )}
    </div>
  );
};

export default LandingScreen;
