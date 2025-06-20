import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsersList from './components/UsersList';
import UserProfile from './components/UserProfile';
import { StatusBar } from 'expo-status-bar';
import './global.css';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UsersList" component={UsersList} options={{ title: 'Users' }} />
        <Stack.Screen name="UserProfile" component={UserProfile} options={{ title: 'Profile' }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
