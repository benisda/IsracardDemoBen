import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home/HomeScreen';
import FavoritesScreen from '../screens/Favorites/FavoritesScreen';
import DetailsScreen from '../screens/Details/DetailsScreen';

const Tab = createBottomTabNavigator();

const Navigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Favorites" component={FavoritesScreen} />
                <Tab.Screen name="Details" component={DetailsScreen}
                    options={{ tabBarItemStyle: { display: "none" } }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
