import React from 'react';
import { View, Text } from 'react-native';

import Button from '../../component/Button';
import Input from '../../component/Input';

import styles from './style';


const Login = () =>(
    <View style={styles.container}>
        <View style={styles.header}>
        <Input placeholder="Email" inputStyle={styles.inputStyle}/>
        <Input placeholder="Password" inputStyle={styles.inputStyle}/>
        <Text style={styles.headerText}>Forgot password?</Text>
        </View>
        <View style={styles.space}></View>
        <View style={styles.footer}>
        <Text  style={styles.footerText}>By continuting you agree to our <Text style={styles.footerColor}>Terms of Service</Text> and <Text style={styles.footerColor}>Privacy Policy.</Text></Text>
        <Button text="Log in"/>
        </View>
        
       
     
        
    </View>
  )
export default Login;