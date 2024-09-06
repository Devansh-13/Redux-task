import { useSelector,useDispatch } from "react-redux";

const Counter = ()=>{
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    return (
    <>
    <div>{count}</div>
    <button onClick={()=>dispatch({type:'INCREMENT'})}>INCREMENT</button>

    <button onClick={()=>dispatch({type:'DECREMENT'})}>DECREMENT</button>
    </>
    )
}

export default Counter;

