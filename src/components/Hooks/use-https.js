import {useCallback,useReducer} from 'react'

function httpReducer(state,action){
    if(action.type==="Send"){
        return{
            data:null,
            error:null,
            status:"pending"
        }
    }
    if(action.type==="Success"){
        return{
            data:action.responseData,
            error:null,
            status:"Completed"
        }
    }
    if(action.type==="Error"){
        return{
            data:null,
            error:action.errorMessage,
            status:"Completed"
        }
    }
    return state;
    
}

export default function useHttp(requestFunction,startWithPending=false){
    const [httpState,dispatch]=useReducer(httpReducer,{
        error:null,
        status:startWithPending?'pending':null,
        data:null,
    })
    const sendRequest=useCallback(
        async function (requestData){
            dispatch({type:"Send"})
            try{
                const responceData=await requestFunction(requestData)
                dispatch({type:"Success",responceData})
            }
            catch(error){
                dispatch({type:"Error",errorMessage:error.message||"Something Went Wrong"})
            }
        },[requestFunction]
    )
    return  {
        sendRequest,
        ...httpState
    }
}