import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import RegistrationScreen from './screens/RegistrationScreen';


export default function App() {

  return (
    <View style={styles.container}>
      <RegistrationScreen/>      
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  }, 
});
