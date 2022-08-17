import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";
import { decrement as dynamicDecrement , increment as dynamicIncrement} from "../redux/dynamicCounter/actions";

const VariableCounter = ({ count, increment, decrement, id }) => {



  
  return (
    <div>
      <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div class="text-2xl font-semibold">{count}</div>
        <div class="flex space-x-3">
          <button
            class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            onClick={increment}
          >
            Increment
          </button>
          <button
            class="bg-red-400 text-white px-3 py-2 rounded shadow"
            onClick={decrement}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: ownProps.dynamic ? (value) =>  dispatch(dynamicIncrement(5)) : () =>  dispatch(increment()),
    decrement: ownProps.dynamic ? (value) => dispatch(dynamicDecrement(3)) : () => dispatch(decrement()) ,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);
