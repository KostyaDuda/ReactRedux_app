import React, { Component } from 'react';
import {connect} from 'react-redux'
import { actions } from './../redux/modules/students'
import _ from 'lodash'
import { coinsSelector, isFetchingSelector } from '../redux/selectors/coinsSelector'

class ReverseCoins extends Component {
    render() {
        const {coins_, isFetching} = this.props
        return coins_ && !isFetching ?
        _.map(coins_, coin=><div key={coin.id}>{coin.id} | {coin.symbol} | {coin.name} | {coin.status} | {coin.description} | {coin.price}</div>) :
            <div>Loading...</div>
    }
}

const mapDispatchToProps = {
    ...actions
}

const mapStateToProps = (state) => ({
    coins_:coinsSelector(state),
    isFetching:isFetchingSelector(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(ReverseCoins)