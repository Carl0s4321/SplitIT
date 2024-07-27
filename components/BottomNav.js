import react from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { InnerContainer } from './styles';
import HomeScreen from '../screens/Home';
import ScanScreen from '../screens/Scan';
import ProfileScreen from '../screens/Profile';
import { Colors } from './styles';
import { FontAwesome, AntDesign} from '@expo/vector-icons';



// Colors
const  {primary} = Colors;

const Tab = createBottomTabNavigator();

const BottomNav= ({route}) => {
    const userData = route.params;
    return(
        <Tab.Navigator 
        screenOptions={{
            tabBarShowLabel: false,
        }}>
            <Tab.Screen name="Home" component={HomeScreen} 
                options={{ 
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <FontAwesome name="home" size={30} color={focused ? primary: 'grey'}/>
                )
                }}/>
            <Tab.Screen name="Scan" component={ScanScreen} options={{
                tabBarIcon: ({focused}) =>(
                    <AntDesign name="scan1" size={30} color={focused ? primary: 'grey'}/>
                )
            }}/>
            <Tab.Screen name="Profile" component={ProfileScreen}  initialParams={userData} options={{
                tabBarIcon: ({focused}) =>(
                    <FontAwesome name="user-circle" size={30} color={focused ? primary: 'grey'}/>
                )
            }}/>
        </Tab.Navigator>
    );
}

export default BottomNav;