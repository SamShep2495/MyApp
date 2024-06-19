import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const footballShirts = () => {
  return (
    <View style={styles.titleContainer}>
      <Text>Football Shirts</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
    marginTop: 50,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

export default footballShirts