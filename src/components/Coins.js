import React, { Component } from 'react';
import {connect} from 'react-redux'
import { actions } from '../redux/modules/coins.js'
import _ from 'lodash'
import './table_style.css';

import { coinsSelector, isFetchingSelector } from '../redux/selectors/coinsSelector'

class Header extends React.Component{
    render(){
        return(
        <header>
            <div class="head">

            </div>
        </header>
        )
    }
}

class Main_coins extends Component {
    componentDidMount(){
        this.props.getData()
    }
    render() {
        const {coins_, isFetching} = this.props
        return coins_ && !isFetching ?
            <div class="main">
                <table class="table_price">
                  <tr>
                     <th>#</th>
                     <th>Symbol</th>
                     <th>Name</th>
                     <th>Description</th>
                     <th>Price</th>
                     <th></th>
                    </tr>
                {
                    _.map(coins_.data, coin=><tr><td key={coin.id}>{coin.id}</td>
                     <td>{coin.symbol}</td>
                     <td> {coin.name}</td>
                     <td>{coin.description}</td>
                     <td>{coin.price}</td>
                     <td><a>Follow</a></td></tr>
                    )     
                }

                </table>
            </div>
             :
            <div>Loading...</div>
    }

    handleClick(){
        this.props.ReverseCoins()
    }
}

const mapDispatchToProps = {
    ...actions
}

const mapStateToProps = (state) => ({
    coins_:coinsSelector(state),
    isFetching:isFetchingSelector(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Main_coins)