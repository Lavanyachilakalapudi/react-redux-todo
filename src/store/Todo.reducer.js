const initialState={
    todo:[{
        "id": 4,
        "task": "clock-in",
        "status": "Done"
      }]
}

const todoReducer=(state=initialState,action)=>{
    if(action.type==='LOAD_TODOS'){
        //console.log("+++++",action.payload) 
        return {...state, todo: [...action.payload]}
    }

    if(action.type==='ADD_TODOS'){
        return {...state, todo: action.payload}
    }
    return state;
}
export default todoReducer;