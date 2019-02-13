import _ from 'lodash'
import { createAction , handleActions } from 'redux-actions'
import { resolve, request, reject } from 'redux-promised'


// ------------------------------------
// Constants
// ------------------------------------
export const NAMESPACE = 'coins'
export const GET_COINS = NAMESPACE+'/'+'GET_COINS'
export const REVERSE_COINS = NAMESPACE+'/'+'REVERSE_COINS'

const url  = 'http://km.softbistro.online:20080/coins'


// ------------------------------------
// Actions
// ------------------------------------
const getData = () => {
    return{
        type: GET_COINS,
        meta: { promise: true },
        payload: fetch(url, {
            method: 'GET',
            mode:'cors'
        }).then(response=>response.json())
    }
}

export const reversecoins  = createAction(REVERSE_COINS)


export const actions = {
    getData,
    reversecoins
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
    [resolve(GET_COINS)]: (state, { payload }) => {
        return{...state, data:payload, dataFethcing:false}
    },
    [reject(GET_COINS)]: (state, { payload }) => ({...state, data:null, dataFethcing:false}),
    [request(GET_COINS)]: (state, { payload }) => ({...state, data:null, dataFethcing:true}),
    [REVERSE_COINS]:state => {return {...state, reversed:!state.reversed}}
},{reversed:false})

// ------------------------------------
// Helpers
// ------------------------------------



