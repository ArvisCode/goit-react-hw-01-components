import Profile from 'components/socialProfile/socialProfile';
import user from './data/user.json';

import Statistics from 'components/statistics/statistics';
import stats from './data/statData.json';

export const App = () => {
  return (
    <div>
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: 40,
          textTransform: 'uppercase',
          color: '#010101',
          padding: 20,
        }}
      >
        goit-react-hw-01-components{' '}
      </section>

      <section
        title={"Task-1 'Social profile'"}
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: 40,
        }}
      >
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>

      <section
              title={"Task-2 'Upload stats'"}

        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: 40,
        }}
      >
        <Statistics title="Upload stats" stats={stats} />
        <Statistics stats={stats} />
      </section>
    </div>
  );
};
