import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet} from 'react-native';

const Greetings = () => {
  return (
    <View>
      <Text>Greetings</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Greetings