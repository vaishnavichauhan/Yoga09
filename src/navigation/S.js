import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from './styles';

import Splash from '../pages/Splash';
import CreateAccount from '../pages/CreateAccount';
import WelcomeBack from '../pages/WelcomeBack';
import Login from '../pages/Login';
import Authentication from '../pages/Authentication';
import Practice from '../pages/Practice';
import Goal from '../pages/Goal';
import Email from '../pages/Email';
import Findshop from '../pages/Findshop';
import Items from '../pages/Items';
//tab component
import MainHome from '../pages/MainHome';
import Notification from '../pages/Notification';
import Discover from '../pages/Discover';
import Profile from '../pages/Profile';

const Stack = createNativeStackNavigator();
const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen options={{headerShown:false }} name="splash" component={Splash} />
            <Stack.Screen options={{headerShown:false }} name="CreateAccount" component={CreateAccount} />
            <Stack.Screen options={styles.WelComeBackS} name="WelcomeBack" component={WelcomeBack} />
            <Stack.Screen options={styles.LoginS}name="Login" component={Login} />
            <Stack.Screen options={styles.AuthenticationS} name="Authentication" component={Authentication} />
            <Stack.Screen options={styles.PracticeS} name="Practice" component={Practice} />
            <Stack.Screen options={{headerShown:false }} name="Goal" component={Goal} />
            <Stack.Screen options={styles.EmailS}name="Email" component={Email} />
            <Stack.Screen options={styles.FindshopS} name="Findshop" component={Findshop} />
            <Stack.Screen options={styles.ItemsS}name="Items" component={Items} />
            <Stack.Screen name="Home" component={MainHome} />
        </Stack.Navigator >
    )
}
const DiscoverStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Discover" component={Discover} />
        </Stack.Navigator>
    )
}
const NotiStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
    )
}
const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator>
       <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

export { MainStackNavigator, DiscoverStackNavigator,NotiStackNavigator,ProfileStackNavigator };
//  export default MainStackNavigator;