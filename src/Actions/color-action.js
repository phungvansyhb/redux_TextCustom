import * as types from './types'

export const getColor = ( color ) => ({
    type: types.GET_COLOR,
    payload : { color }
})
