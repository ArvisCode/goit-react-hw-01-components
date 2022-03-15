import Profile from "components/socialProfile/socialProfile";
import user from "./data/user.json";


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
    <section title={"Task-1 'Social network profile'"}  
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: 40,
      }}>
    <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
    </section>
    </div>
  );
};
