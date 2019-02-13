import _ from 'lodash'

export const coinsSelector = state => {
    return state.coins.reversed ?  _.reverse(_.clone(state.coins.data)) : _.clone(state.coins.data)
}

//export const studentsReversedSelector = state => _.reverse(state.students.data) || []
export const isFetchingSelector = state => state.coins.dataFetching
