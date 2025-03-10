import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../store/features/counter/counterSlice.js'

const Counter = () => {
  
  const count = useSelector((state) => state.counter.value)
  const isLogged = useSelector((state) => state.counter.isLogged)
  const dispatch = useDispatch()

  return (
    <div>
      <span>{isLogged}</span>
      <div>      
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment by amount"
          onClick={() => dispatch(incrementByAmount(30))}
        >
          Increment by amount
        </button>
      </div>
    </div>
  )
}

export default Counter;