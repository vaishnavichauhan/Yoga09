import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discover from '../pages/Discover';
import Notification from '../pages/Notification';
import Profile from '../pages/Profile';
import MainHome from '../pages/MainHome';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={MainHome} />
            <Tab.Screen name="Discover" component={Discover} />
            <Tab.Screen name="Notifications" component={Notification} /> 
             <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}
export default BottomTabNavigator;
