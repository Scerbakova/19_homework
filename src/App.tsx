import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement, devide, increment, incrementByAmount, multiply, reset,
} from './store/reducers/counterSlice';
import { RootState, AppDispatch } from './store';
// import styles from './Counter.module.css';

const App = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <h1>{count}</h1>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>

        <button
          aria-label="Increment value"
          onClick={() => dispatch(devide())}
        >
          devide by 2
        </button>

        <button
          aria-label="Increment value"
          onClick={() => dispatch(multiply())}
        >
          Multiply by 7
        </button>

        <button
          aria-label="Increment value"
          onClick={() => dispatch(reset(0))}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
