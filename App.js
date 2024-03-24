import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as Yup from 'yup'


const PasswordSchema =Yup.object().shape({
  passwordLength : Yup.number()
  .min(4,'Should be minimum of 4 characters')
  .max(16,'Should be maximum of 16 characters')
  .required('Length is required')
})
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
