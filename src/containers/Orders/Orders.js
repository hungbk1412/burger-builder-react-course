import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import Axios from '../../axios-orders';

class Orders extends Component {
    state = {
        orders : [],
        loading: true
    }
    componentDidMount() {
        Axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    })                    
                };
                this.setState({orders: fetchedOrders})       
                this.setState({loading: false})
            })
            .catch(err => console.log('err', err))
    }
    render() {
        return (
            <div>
                <Order />
                <Order />
            </div>
        )
    }
}

export default Orders;