import { getAllBalances, WalletBalance } from '@/utils/buzzcoinUtils';
import { useContext, useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { EthereumContext } from '@/context/EthereumContext';

const LeaderboardView = () => {
  const [leaderboard, setLeaderboard] = useState<WalletBalance[]>([]);
  const ethereum = useContext(EthereumContext);

  useEffect(() => {
    getAllBalances(true).then((balances) => {
      setLeaderboard(balances);
    });
  }, []);

  return (
    <Table className='bg-card !rounded-sm !overflow-hidden'>
      <TableHeader className='!rounded-sm !overflow-hidden'>
        <TableRow>
          <TableHead>Address</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leaderboard.map((lbRow) => (
          <TableRow
            key={lbRow.address}
            className={lbRow.address === ethereum.currentAccount ? 'bg-amber-200' : ''}
          >
            <TableCell className='font-medium'>{lbRow.address}</TableCell>
            <TableCell>{lbRow.balance}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default LeaderboardView;
