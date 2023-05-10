import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../redux/action/actionCreator';

function Header() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.authReducer.isAuthenticated);

  const logoutHandler = () => {
    dispatch(auth());
  }

  return (
    <header className={classes.header}>
      <h1>Redux</h1>
      {authState ?
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
        : null}
    </header>
  );
};

export default Header;
