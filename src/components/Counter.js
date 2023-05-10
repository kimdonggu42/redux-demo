import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseByOne, increaseByFive, decreaseByOne, toggle } from '../redux/action/actionCreator';

function Counter() {
  const dispatch = useDispatch();
  const counterState = useSelector((state) => state.counterReducer.countNum);
  const isCountState = useSelector((state) => state.showReducer.isCount);

  const incrementHandler = () => {
    dispatch(increaseByOne());
  }

  const increaseHandler = () => {
    dispatch(increaseByFive());
  }

  const decrementHandler = () => {
    dispatch(decreaseByOne());
  }

  const toggleCounterHandler = () => {
    dispatch(toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isCountState ? <div className={classes.value}>{counterState}</div> : null}
      <div>
        <button onClick={incrementHandler}>+1</button>
        <button onClick={increaseHandler}>+5</button>
        <button onClick={decrementHandler}>-1</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
