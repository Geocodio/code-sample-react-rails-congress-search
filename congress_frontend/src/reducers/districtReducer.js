const districtReducer = (state = "", action) => {
    switch(action.type){
        case "SET_DISTRICT":
            return action.district
        default:
            return state
    }
}

export default districtReducer