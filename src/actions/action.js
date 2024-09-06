
import axios from 'axios';


const fetch = (api)=>{
    return async (dispatch) =>{
        dispatch({type:"REQUEST"});
        try{
            console.log(api,"api");
        const response = await axios.get(api);
        console.log(response.data.data,"data")
        dispatch({type:"SUCCESS",payload:response.data.data});
        }
        catch(error){
        dispatch({type:"FAILURE",error:error.message});
        }
    }
    
}

export default fetch;
