import classes from './Counter.module.css';
import { counterAction } from '../store';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();

  const incrementHandler = () => {
    //dispatch({type: 'increment'});
    dispatch(counterAction.increment());
  }

  const increaseHandler = () => {
    dispatch(counterAction.increase(10));
  }
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  }

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  const counter = useSelector(state => state.counterReducer.counter);
  const isShow = useSelector(state => state.counterReducer.showCounter)
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShow && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
