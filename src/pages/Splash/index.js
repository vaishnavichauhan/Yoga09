import React from "react";
import {StyleSheet,Text,View,ImageBackground} from "react-native";

import Button from "../../component/Button";
import Header from "../../component/Header";
import styles from "./style";

const Splash = ({}) => (
    <ImageBackground source={require('../../assers/images/yogaleady.png')}  style={styles.image}>
 <View style={styles.container}>

    <View style={{flex:1}}>
        <Text style={styles.subTitle}>Keepyoga</Text>
        <Header 
        position={styles.title}
        title={"Practice yoga \n whenever you want."}
        /> 
    </View>

     <View style={styles.bottomButton}>
        <Button 
        titleStyle={styles.titleStyle}
        buttonStyle={styles.buttonStyle}
        text="Get started"/>
     </View>
    
 </View>
 </ImageBackground>

)


export default Splash;