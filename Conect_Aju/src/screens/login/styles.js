import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#00796b',
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00796b',
  },
  button: {
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#00796b',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  texTask: {
    marginTop: 20,
    fontSize: 16,
  },
  registerButtonText: {
    color: '#00796b',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default styles;
