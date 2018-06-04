import React from 'react';
import { View } from 'react-native';
import SignUp from './screens/SignUp';
import styles from './App.styles';
import { Provider } from 'react-redux'
import store from './store'

export default class ChatApp extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <View style={styles.container}>
          <SignUp />
        </View>
      </Provider>
    );
  }
}
