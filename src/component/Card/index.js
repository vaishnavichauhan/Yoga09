import React from 'react';
import {Text,View,Image} from 'react-native';
import styles from './style';


const Card = ({title,imagespath}) => {
    return (
       <View style={styles.main}>
         <Image
        style={styles.images}
        source={imagespath}
      />
        <Text style={styles.title}>{title}</Text>
       </View>
    )
}

export default Card;