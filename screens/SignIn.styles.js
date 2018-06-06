import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#0073e6',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    backgroundColor: '#0073e6',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  buttonPrimary: {
    height: 36,
    backgroundColor: '#66b3ff',
    borderColor: '#66b3ff',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 15,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonSecondary: {
    height: 36,
    backgroundColor: '#75d8ff',
    borderColor: '#75d8ff',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});
