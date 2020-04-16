import React from 'react'
import {Query} from 'react-apollo'
import {gql} from 'apollo-boost'
import Header from './header.component'
// import {GET_CART_HIDDEN} from '../../graphql/resolvers/resolvers' 

const GET_CART_HIDDEN = gql`
    {
        cartHidden @client
    }
`

const HeaderContainer = ({loading, data}) =>(
    <Query query={GET_CART_HIDDEN}>
        {
           ({data}) => {
            const {cartHidden} = data;
            return <Header hidden={cartHidden} />
            }
        }
    </Query>
)

export default HeaderContainer