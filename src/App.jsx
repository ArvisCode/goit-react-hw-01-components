import Section from 'components/section/section';

import Profile from 'components/socialProfile/socialProfile';
import user from './data/user.json';

import Statistics from 'components/statistics/statistics';
import stats from './data/statData.json';

import FriendList from 'components/friendList/friendList';
import friends from './data/friends.json';

import TransactionHistory from 'components/transactionHistory/transactionHistory';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div>
      <h1>goit-react-hw-01-components</h1>

      <Section title={"Task-1 'Social profile'"}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title={"Task-2 'Upload stats'"}>
        <Statistics title="Upload stats" stats={stats} />
        <Statistics stats={stats} />
      </Section>

      <Section title={"Task-3 'FriendList'"}>
        <FriendList friends={friends} />
      </Section>

      <Section title={"Task-4 'Transaction History'"}>
        <TransactionHistory transactions={transactions} />
      </Section>
    </div>
  );
};
