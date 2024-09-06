const initialState ={
    data:[],
    loading:false,
    error:null
}

const fetchReducer = (state=initialState,action)=>{
    switch (action.type){
        case "REQUEST" : 
        return {
            ...state,loading:true,error:null
        }
        case "SUCCESS":
            return {
                ...state,loading:false ,data:action.payload,error:null
            } 
    
        case "FAILURE":
            return {
                ...state,loading:false ,error:action.error
            } 
            
        default :
        return state;

    }
}

export default fetchReducer;