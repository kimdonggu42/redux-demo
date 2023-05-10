import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const authState = useSelector((state) => state.authReducer.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {authState ? <UserProfile /> : <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
