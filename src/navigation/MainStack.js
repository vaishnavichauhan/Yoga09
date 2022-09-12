import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



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


 const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();

const MainStack = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                {/* <Stack.Screen name="Home" component={Splash} /> */}
                {/* <Stack.Screen name="CreateAccount" component={CreateAccount} /> */}
                {/* <Stack.Screen name="WelcomeBack" component={WelcomeBack} /> */}
                {/* <Stack.Screen name="Login" component={Login} /> */}
                {/* <Stack.Screen name="Authentication" component={Authentication} /> */}
                {/* <Stack.Screen name="Practice" component={Practice} /> */}
                {/* <Stack.Screen name="Goal" component={Goal} /> */}
                {/* <Stack.Screen name="Email" component={Email} /> */}
                <Stack.Screen name="Findshop" component={Findshop} />
                {/* <Stack.Screen name="Items" component={Items} /> */}

                



            </Stack.Navigator>
        </NavigationContainer>



    )

};
export default MainStack;