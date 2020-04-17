import React from 'react';
import {gql} from 'apollo-boost'
import {Query} from 'react-apollo'
import CheckoutComponent from './checkout.component'

const GET_CART_ITEMS_AND_PRICE = gql`{
    cartItems @client
    totalPrice @client
}
`

const checkoutComponentContainer = () =>(
    <Query query={GET_CART_ITEMS_AND_PRICE}>
        {
            ({data}) => {
            const {cartItems,totalPrice} = data;
            return <CheckoutComponent cartItems={cartItems} total={totalPrice}/>
            }
        }
    </Query>
)

export default checkoutComponentContainer