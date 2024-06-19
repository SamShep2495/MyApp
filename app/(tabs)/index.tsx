import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { Link } from 'expo-router';
import { HelloWave } from '@/components/HelloWave';

export default function HomeScreen() {
  return (
    <View style={styles.titleContainer}>
    <Text>Football Shirts Shop!</Text>
    <HelloWave />
    <View>
        <Link href="/profile" style={{ color: 'blue' }}>Go to Profile</Link>
      </View>
      
  </View>
  );
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
