/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment } from 'react';
import FeedPage  from './src/Pages/Feed'
import { ScrollView } from 'react-native'


const App = () => {
  return (
    <ScrollView>
      <FeedPage/>
    </ScrollView>
  );
};



export default App;
