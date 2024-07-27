// screens
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';

import { useEffect, useState} from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db} from './firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { LoadingContainer, MsgBox, Colors } from './components/styles';

import BottomNav from './components/BottomNav';

// Colors
const  {primary} = Colors;

const Stack = createStackNavigator();


function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    return auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
          setAuthenticated(true);
        }
      } else {
        setAuthenticated(false);
      }
      setLoading(false);
    });
  }, []);

  if (loading){
    return(
      <LoadingContainer>
        <ActivityIndicator size="large" color={primary} />
        <MsgBox>Loading...</MsgBox>
      </LoadingContainer>
    );
  } // render loading/splash screen etc

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authenticated ? (
          <Stack.Screen name="Main" component={BottomNav}  initialParams={userData} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}