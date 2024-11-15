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
    borderWidth: 1,
    borderColor: '#00796b',
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },

  button: {
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#00796b',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },

  linkText: {
    color: '#00796b',
    fontSize: 14,
    marginTop: 10,
  },

  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default styles;
