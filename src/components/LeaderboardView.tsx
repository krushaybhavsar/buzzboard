import { formatBalance, getAllBalances, WalletBalance } from '@/utils/buzzcoinUtils';
import { useContext, useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableRow } from './ui/table';
import { EthereumContext } from '@/context/EthereumContext';
import { LoaderCircle } from 'lucide-react';
import { TypographyP } from './ui/typography';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import './LeaderboardView.css';
import { cn } from '@/lib/utils';

const LeaderboardView = () => {
  const [leaderboard, setLeaderboard] = useState<WalletBalance[]>([]);
  const [loading, setLoading] = useState(true);
  const ethereum = useContext(EthereumContext);

  useEffect(() => {
    setLoading(true);
    getAllBalances(true).then((balances) => {
      setLeaderboard(balances);
      setLoading(false);
    });
  }, []);

  return (
    <div className='flex flex-col gap-4 w-full justify-center items-center'>
      {loading ? (
        <div className='flex flex-col p-8 justify-center items-center bg-card rounded-sm shadow-sm gap-4'>
          <LoaderCircle size={32} strokeWidth={1} className='animate-spin duration-500' />
          <div className='flex flex-col items-center gap-1'>
            <TypographyP>Loading leaderboard</TypographyP>
            <TypographyP className='!text-[16px]'>This may take a few seconds.</TypographyP>
          </div>
        </div>
      ) : (
        <div className='max-w-[750px] w-full !rounded-sm'>
          <Table className='bg-card !rounded-sm'>
            <TableBody>
              {leaderboard.map((lbRow, index) => (
                <TableRow
                  key={lbRow.address}
                  className={cn(
                    'relative',
                    ethereum.currentAccount === lbRow.address && 'bg-border/40 hover:bg-border/60',
                  )}
                >
                  <TableCell className={'!p-4'}>
                    <div
                      className={cn(
                        'bg-border/50 text-center rounded-full w-8 h-8 flex justify-center items-center',
                        ethereum.currentAccount === lbRow.address && 'bg-primary',
                      )}
                    >
                      <TypographyP
                        className={cn(
                          '!font-recoleta !font-[400] !text-[16px] !leading-none text-center',
                          ethereum.currentAccount === lbRow.address && 'text-primary-foreground',
                        )}
                      >
                        {index + 1}
                      </TypographyP>
                    </div>
                  </TableCell>
                  <TableCell className='!p-4'>{lbRow.address}</TableCell>
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
