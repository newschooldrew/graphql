import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {ApolloProvider} from 'react-apollo'
import {createHttpLink} from 'apollo-link-http'
// connects client to our /graphql endpoint
import {InMemoryCache} from 'apollo-cache-inmemory'
// to not make double requests
import {ApolloClient} from 'apollo-boost'
import { store, persistor } from './redux/store';

import './index.css';
import App from './App';
import {resolvers, typeDefs} from './graphql/resolvers/resolvers'


const httpLink = createHttpLink({
  uri:'https://crwn-clothing.com'
})

const cache = new InMemoryCache();

const client = new ApolloClient({
  link:httpLink,
  cache,
  resolvers,
  typeDefs
})

client.writeData({
  data:{
    cartHidden:true,
    cartItems:[],
    itemCount:0,
    totalPrice:0
  }
})

ReactDOM.render(
<ApolloProvider client={client}>
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
