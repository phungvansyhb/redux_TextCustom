import * as types from '../Actions/types'
const initialState = {
    defaultSize : 18,
    maxSize : 30,
    minSize :12,
    step : 2
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case types.SIZE_INCREASE:
        if ( state.defaultSize < state.maxSize  ){
            state.defaultSize = state.defaultSize+2;
            return { ...state }
       }
        else return state
       
    case types.SIZE_DECREASE:
        if ( state.defaultSize > state.minSize ){
            state.defaultSize = state.defaultSize-2;
            return { ...state }
        }
       
        else return state
     
    default:
        return state
    }
}
