import Profile from './Profile/Profile';
import user from './Data/user.json';

import Statistics from './Statistics/Statistics';
import data from './Data/data.json';

import FriendList from './FriendList/FriendList';
import friends from './Data/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transaction from './Data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />

      <Statistics data={data} title="Upload stats" />

      <FriendList friends={friends} />

      <TransactionHistory transaction={transaction} />
    </>
  );
};
