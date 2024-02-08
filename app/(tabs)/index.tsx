import { Button, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link, router } from 'expo-router';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Button title="Push dynamic route" onPress={() => router.push('/123/456')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
