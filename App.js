import React from 'react';
import { View } from 'react-native';
import SignUp from './screens/SignUp';
import styles from './App.styles';

export default class ChatApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SignUp />
      </View>
    );
  }
}
