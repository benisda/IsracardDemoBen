import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import DetailsScreen from '../screens/DetailsScreen';
import HomeSvg from '../assets/svg/HomeSvg';
import StarSvg from '../assets/svg/StarSvg';

const Tab = createBottomTabNavigator();

const Navigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                backBehavior='history'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, focused, size }) => (
                            <HomeSvg fill={focused ? color : '#BBB'} width={size} height={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Favorites"
                    component={FavoritesScreen}
                    options={{
                        tabBarIcon: ({ color, focused, size }) => (
                            <StarSvg fill={focused ? color : '#BBB'} width={size} height={size} />
                        )
                    }}
                />
                <Tab.Screen name="Details" component={DetailsScreen}
                    options={{ tabBarItemStyle: { display: "none" } }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
