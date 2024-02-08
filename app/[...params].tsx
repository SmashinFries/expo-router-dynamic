import { Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Route() {
  const { everything } = useLocalSearchParams<{
    everything: string[];
  }>();

  return <Text style={{color:'#FFF'}}>Params: {everything}</Text>;
}
