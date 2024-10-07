import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import SignupScreen from './src/Screens/SignupScreen';


const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HOME" component={HomeScreen} />
                <Stack.Screen name="LOGIN" component={LoginScreen} />
                <Stack.Screen name="SIGNUP" component={SignupScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;