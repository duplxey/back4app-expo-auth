import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';

export default function HomeScreen() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{marginBottom: 12}}>This is some text.</Text>
      <Button icon="rocket" mode="contained" onPress={() => console.log('Pressed')}>
        Back4app rocks!
      </Button>
    </View>
  );
}