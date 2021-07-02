const  countInitialState = []

const countReducer = (state = countInitialState , action) => {
    switch(action.type){
        case 'ADD_MOVIES' : {
            return [...state ,{...action.payload} ]
        }
        case "DELETE_MOVIES" : {
            console.log(action.payload)
            return state.filter((ele)=>{
                return(ele.id!==action.payload)
            })
        }
        
        default : {
            return [...state]
        }
    }
}
export default countReducer