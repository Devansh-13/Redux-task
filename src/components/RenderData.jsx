import { useSelector,useDispatch } from "react-redux"
import fetch from "../actions/action"
import { useEffect } from "react";
import { useFetchData } from "../custom/fetchData";

const RenderComponent=()=>{
    // const {data,loading,error} = useSelector(state=>state.fetch);
    // const dispatch = useDispatch();

    const api = "https://jsonplaceholder.typicode.com/posts";

    const {data,error,isLoading} = useFetchData(api);

    // useEffect(()=>{
    //     if(!data || data.length===0) dispatch(fetch(api));
    // },[dispatch,data]);

    if(isLoading) return <div>Loading...</div>
    

    if(error) return  <div>{error}</div>
    

    return (
        <div>
            {data.map(item=>
                    <div style={{border:"2px dotted green",margin:"5px"}}>
                   
                    <div key={item.id}>{item.id}</div>
                    <li>{item.title}</li>
                
                    </div>
               )}
           
        </div>
    )
}

export default RenderComponent;