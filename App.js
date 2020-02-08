import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  // Creates States for the Component.
  const [name, setName] = useState('Davis');
  const [age, setAge] = useState('30');

  // Handles button clicks.
  const clickHandler = () => {
    setName('Ludell');
    setPerson({
      name: 'Luigi',
      age: 45
    })
  }

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        style={styles.input} 
        placeholder='e.g. John Doe'
        onChangeText={(value) => setName(value)}
      />
      <Text>Enter age:</Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input} 
        placeholder='e.g. 99'
        onChangeText={(value) => setAge(value)}
      />
      <Text>Name: {name} | Age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 20
  },
  buttonContainer: {
    marginTop: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  }
});
