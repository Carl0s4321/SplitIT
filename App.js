// screens
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';

import { useEffect, useState, ActivityIndicator, View} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
 
      setLoading(false);
    });
  }, []);

  if (loading) return null; // Render loading/splash screen etc

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={authenticated ? 'Home' : 'Login'}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}  />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}