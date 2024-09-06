import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="LOGIN" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;