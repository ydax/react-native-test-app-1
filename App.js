import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  // Creates State for the Component.
  const [name, setName] = useState('Davis');

  // Creates State for person.
  const [person, setPerson] = useState({
    name: 'John',
    age: 33
  })

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
      <View style={styles.body}>
        <Text>My name is {name}.</Text>
        <Text>Her name is {person.name} and his age is {person.age}.</Text>
        <View style={styles.buttonContainer}></View>
        {// In React Native, a button is a self-closing tag with props to decorate it.
        }
        <Button title="update state" onPress={clickHandler} />
        <Text></Text>
      </View>
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
  buttonContainer: {
    marginTop: 20
  },
  body: {
    padding: 20
  }
});
