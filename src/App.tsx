/* eslint-disable prettier/prettier */
import React from 'react';
import {StatusBar} from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigation} from './navigation/tabNavigation/TabNavigation';

type AppProps = {};

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
});

const App: React.FC<AppProps> = ({}) => (
  <ApolloProvider client={client}>
    <StatusBar barStyle="light-content" backgroundColor="green" />

    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  </ApolloProvider>
);

export default App;
