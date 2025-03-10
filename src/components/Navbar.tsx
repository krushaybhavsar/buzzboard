import { useLocation, useNavigate } from 'react-router-dom';
import { Button, buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { SiteMap, SiteMapLink } from '@/utils/navigation';
import { TypographyH1, TypographyP } from './ui/typography';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './ui/navigation-menu';
import { useContext } from 'react';
import { EthereumContext } from '@/context/EthereumContext';
import { Dot, LoaderCircle, Wallet } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export const actionBtnStyle = cn(
  buttonVariants({
    variant: 'default',
    size: 'default',
    className: 'w-fit',
  }),
);

export const getNavbarLinkElement = (link: SiteMapLink, index: number) => {
  const defaultNavLinkStyle =
    'flex justify-center items-center bg-transparent text-primary text-[14px] font-[300] p-0 hover:bg-transparent hover:text-primary/90 hover:cursor-pointer';

  switch (link.linkType) {
    case 'hash':
      return (
        // <HashLink
        //   key={index}
        //   to={link.slug}
        //   smooth
        //   className={link.navbarSettings?.style === 'action' ? actionBtnStyle : defaultNavLinkStyle}
        //   style={
        //     theme === 'dark'
        //       ? {
        //           backgroundColor: 'white',
        //           color: 'var(--primary)',
        //           transition: 'all 0.3s ease-in-out',
        //         }
        //       : {
        //           transition: 'all 0.3s ease-in-out',
        //         }
        //   }
        // >
        //   {link.displayName}
        // </HashLink>
        <></>
      );
    case 'link':
      return (
        <NavigationMenuLink
          key={index}
          className={link.navbarSettings?.style === 'action' ? actionBtnStyle : defaultNavLinkStyle}
          href={link.externalLink ? link.navbarSettings?.externalLinkURL : link.slug}
          target={link.externalLink ? '_blank' : ''}
          rel={link.externalLink ? 'noopener noreferrer' : ''}
        >
          {link.displayName}
        </NavigationMenuLink>
      );
    case 'custom':
      return (
        <Button
          key={index}
          // onClick={customLinksMap[SiteScreens.SIGN_IN]}
          className={link.navbarSettings?.style === 'action' ? actionBtnStyle : defaultNavLinkStyle}
        >
          {link.displayName}
        </Button>
      );
  }
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ethereum = useContext(EthereumContext);

  const updateHideNavbar = (): boolean => {
    const slug = location.pathname as keyof typeof SiteMap;
    return SiteMap[slug]?.navbarSettings?.showNavbar === true ? false : true;
  };

  const extractLinks = (): SiteMapLink[] => {
    const links: SiteMapLink[] = [];
    const extract = (link: SiteMapLink) => {
      if (link.navbarSettings?.showInNavbar) {
        links.push(link);
      }
      Object.values(link.children).forEach((child) => {
        extract(child);
      });
    };
    Object.values(SiteMap).forEach((link) => {
      extract(link);
    });
    links.sort((a, b) => a.navbarSettings?.index! - b.navbarSettings?.index!);
    return links;
  };

  return (
    <div
      className={
        'navbar h-[var(--navbar-height)] w-full flex items-center flex-col backdrop-blur-md fixed top-0 z-50 transition-all ease-in-out duration-300'
      }
      style={{
        display: updateHideNavbar() ? 'none' : 'flex',
      }}
    >
      <div className='web-menu flex h-full items-center justify-between w-full px-[24px] max-w-[1408px]'>
        <div className='flex items-center gap-1 flex-1' onClick={() => navigate('/')}>
          {/* <LogoIcon
            className={
              'h-[36px] w-[36px] hover:cursor-pointer transition-all ease-in-out duration-300' +
              (theme === 'dark' && ' invert')
            }
          /> */}
          <TypographyH1 className='text-[22px] hover:cursor-pointer transition-all ease-in-out duration-300 font-semibold'>
            buzzboard
          </TypographyH1>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className='flex gap-6 items-center'>
              {extractLinks().map((link, index) => getNavbarLinkElement(link, index))}
              {!ethereum.currentAccount ? (
                <Button
                  className='flex items-center justify-center gap-2'
                  onClick={ethereum.connectWallet}
                >
                  {ethereum.isLoading ? (
                    <LoaderCircle className='animate-spin duration-600' />
                  ) : (
                    <Wallet />
                  )}
                  Connect Wallet
                </Button>
              ) : (
                <Tooltip>
                  <TooltipTrigger>
                    <div className='flex items-center gap-2 bg-accent rounded-sm px-2 py-1 cursor-pointer'>
                      <Dot size={48} className='m-[-16px] animate-pulse text-green-400' />
                      <TypographyP className='!text-[16px]'>
                        {ethereum.currentAccount?.slice(0, 6)}...
                        {ethereum.currentAccount?.slice(ethereum.currentAccount.length - 4)}
                      </TypographyP>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>{ethereum.currentAccount}</TooltipContent>
                </Tooltip>
              )}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
