import { formatBalance, getAllBalances, WalletBalance } from '@/utils/buzzcoinUtils';
import { useContext, useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableRow } from '../ui/table';
import { EthereumContext } from '@/context/EthereumContext';
import { TypographyP } from '../ui/typography';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import './LeaderboardView.css';
import { cn } from '@/lib/utils';
import ChangeSecuritySettingsView from './ChangeSecuritySettingsView';
import { dummyBalances } from '@/utils/constants';
import { toast } from 'sonner';
import { LoaderCircle } from 'lucide-react';

const LeaderboardView = () => {
  const [leaderboard, setLeaderboard] = useState<WalletBalance[]>(dummyBalances);
  const [loading, setLoading] = useState(true);
  const ethereum = useContext(EthereumContext);

  useEffect(() => {
    setLoading(true);
    getAllBalances(true).then((balances) => {
      console.log(balances);
      setLeaderboard(balances);
      setLoading(false);
    });
  }, []);

  const getRowClassName = (row: WalletBalance) => {
    return cn(
      'relative transition-all duration-500',
      ethereum.currentAccount === row.address && !loading && 'bg-border/40 hover:bg-border/60',
      loading
        ? 'blur-[3px] opacity-30 pointer-events-none'
        : 'blur-[0px] opacity-100 pointer-events-all cursor-pointer',
    );
  };

  return (
    <div className='flex flex-col gap-4 justify-center items-center flex-1 max-w-[750px]'>
      {!loading && leaderboard.length === 0 ? (
        <ChangeSecuritySettingsView />
      ) : (
        <div className={cn('w-full !rounded-sm relative')}>
          {loading && (
            <div className='absolute top-0 left-0 z-1 w-full flex flex-col justify-center items-center pt-12 gap-5'>
              <LoaderCircle size={48} strokeWidth={0.75} className='animate-spin duration-500' />
              <div className='flex flex-col items-center gap-2'>
                <TypographyP className='!text-[20px]'>Loading leaderboard</TypographyP>
                <TypographyP className='!text-[16px]'>This may take a few seconds.</TypographyP>
              </div>
            </div>
          )}
          <Table className='bg-card !rounded-sm'>
            <TableBody>
              {leaderboard.map((lbRow, index) => (
                <TableRow
                  key={lbRow.address}
                  className={getRowClassName(lbRow)}
                  onClick={() => {
                    navigator.clipboard.writeText(lbRow.address);
                    toast('Address copied to clipboard!');
                  }}
                >
                  <TableCell className={'!p-4'}>
                    <div
                      className={cn(
                        'bg-border/50 text-center rounded-full w-8 h-8 flex justify-center items-center transition-all ease',
                        ethereum.currentAccount === lbRow.address && !loading && 'bg-primary',
                      )}
                    >
                      <TypographyP
                        className={cn(
                          '!font-recoleta !font-[400] !text-[16px] !leading-none text-center transition-all ease',
                          ethereum.currentAccount === lbRow.address &&
                            !loading &&
                            'text-primary-foreground',
                        )}
                      >
                        {index + 1}
                      </TypographyP>
                    </div>
                  </TableCell>
                  <TableCell className='!p-4 text-center'>{lbRow.address}</TableCell>
                  <TableCell className='!p-4'>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className='flex justify-center items-center !px-3 !py-2 w-fit cursor-pointer hover:bg-border/60 rounded-sm'>
                          {formatBalance(lbRow.balance)}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>{formatBalance(lbRow.balance, true)}</TooltipContent>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default LeaderboardView;
