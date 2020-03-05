import * as types from '../Actions/types'

const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case types.GET_COLOR:
        return { ...state, ...payload }

    default:
        return state
    }
}
