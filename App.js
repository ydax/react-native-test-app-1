import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  // Creates States for the Component.
  const [people, setPeople] = useState([
    {name:'shaun', id:'1'},
    {name:'yoshi', id:'2'},
    {name:'mario', id:'3'},
    {name:'luigi', id:'4'},
    {name:'peach', id:'5'},
    {name:'toad', id:'6'},
    {name:'bower', id:'7'},
  ]);

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
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />

      {/* <ScrollView>
        { people.map(person => (
            <View key={person.key}>
              <Text style={styles.item}>{person.name}</Text>
            </View>
          ))
        }
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24
  }
});
