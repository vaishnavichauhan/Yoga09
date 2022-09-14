import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { MainStackNavigator, DiscoverStackNavigator,NotiStackNavigator,ProfileStackNavigator } from "./StackNavigator";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={MainStackNavigator} />
            <Tab.Screen name="Discover" component={DiscoverStackNavigator} />
            <Tab.Screen name="Notifications" component={NotiStackNavigator} /> 
             <Tab.Screen name="Profile" component={ProfileStackNavigator} />
        </Tab.Navigator>
    )
}
export default BottomTabNavigator;
