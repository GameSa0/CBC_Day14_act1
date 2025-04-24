import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Details = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default Details;