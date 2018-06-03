import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
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
  button: {
    height: 36,
    backgroundColor: '#66b3ff',
    borderColor: '#66b3ff',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});
