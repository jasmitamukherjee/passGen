import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Yup from 'yup'


const PasswordSchema =Yup.object().shape({
  passwordLength : Yup.number()
  .min(4,'Should be minimum of 4 characters')
  .max(16,'Should be maximum of 16 characters')
  .required('Length is required')
})
export default function App() {
  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)
  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength) => {
    let characterList = '';

    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const digitChars = '0123456789'
    const specialChars = '!@#$%^&*()_+'
    if(upperCase){
      characterList+=upperCase
    }
    if(lowerCase){
      characterList+=lowerCase
    }
    if(numbers){
      characterList+=numbers
    }
    if(symbols){
      characterList+=symbols
    }

    const passwordResult = createPassword(characterList,passwordLength)
    setPassword(passwordResult)
    setIsPassGenerated(true)
  }

  const createPassword = (characters,passwordLength)=>{
    let result = ''
    for( let i =0;i<passwordLength;i++){
      const characterIndex = Math.round(Math.random() * characters.length)
      result+=characters.charAt(characterIndex)
    }
    return result

  }
  const resetPasswordState = ()=>{

    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(false)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)

  }

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
