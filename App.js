import React from 'react';
import { View } from 'react-native';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import ChatRoom from './screens/ChatRoom';
import styles from './App.styles';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Scene } from 'react-native-router-flux';

export default class ChatApp extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <View style={styles.container}>
          <Router>
            <Scene key="root">
              <Scene key="signIn" component={ SignIn } title="Sign In" initial={ true } />
              <Scene key="signUp" component={ SignUp } title="Sign Up" />
            </Scene>
          </Router>
        </View>
      </Provider>
    );
  }
}
