 export const addMovies = (add) => {
return {
    type:'ADD_MOVIES',
    payload:add
}
}

export const removeMovie = (dlt) => {
    return {
        type : "DELETE_MOVIES",
        payload:dlt
    }
}
