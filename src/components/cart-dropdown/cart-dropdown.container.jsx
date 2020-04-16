import React from 'react'
import {gql} from 'apollo-boost';
import {Query, Mutation} from 'react-apollo'
import CartDropdown from './cart-dropdown.component'

const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden{
        toggleCartHidden @client
    }
`
const GET_CART_ITEMS= gql`
{
    cartItems @client
}`

const CartDropdownContainer = () => (
    <Mutation mutation={TOGGLE_CART_HIDDEN}>{
        toggleCartHidden => (
            <Query query={GET_CART_ITEMS}>
                {
                ({data})=> {
                    const {cartItems} = data;
                    return <CartDropdown cartItems={cartItems} toggleCartHidden={toggleCartHidden} />
                }
            }
            </Query>
        )
    }
    </Mutation>
)

export default CartDropdownContainer;