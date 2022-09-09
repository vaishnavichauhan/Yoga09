import React from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, SafeAreaView } from "react-native";
import Button from "../../component/Button";
import Header from "../../component/Header";
import Input from "../../component/Input";
import styles from "./style";

// Import required component


// Import vector icons
import Icon from 'react-native-vector-icons/FontAwesome';

const WelcomeBack = ({ }) => (

  <View style={styles.container}>

    <View style={styles.header}>
      <Header title="Welcome back." />
      <Text style={styles.hederText}>Log in to your account</Text>
 
    <View style ={styles.fullinput}>
     <View style ={styles.icon} ><Text style={styles.icontext}><Icon name="flag" size={25} color="red" />+62 <Icon name="chevron-down" size={20} color="black"/></Text></View> 
      <View style ={styles.input}><Input placeholder="Mobile number" keybordtype="numeric" inputStyle={styles.inputStyle} /></View>
    </View>

    <Text>You will receive an SMS verification that may apply message and data rates.</Text>
    </View>
    <View style={styles.space}></View>

    <View style={styles.footer}>
      <View>
      <Button text="Log in" />
      <Text style={styles.footerText} >Use email, insted</Text>
      </View>
      
    </View>

  </View>
)
export default WelcomeBack;