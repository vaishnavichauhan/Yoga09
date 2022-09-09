import React, { useState } from 'react';
import { View, Text} from 'react-native';
import Header from '../../component/Header';
import data from './data';
import styles from './style';
import Button from '../../component/Button';

const Practice = () => {

  var [dataid, setdataid] = useState({})
  // press event 
  let press = (item) => {
    setdataid(item)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header title="Practice Area" />
        <Text>So we can recommend exercises</Text>
      </View>
      {data.map((item) =>
        <Button text={item.title} buttonStyle={[styles.buttonStyle, { backgroundColor: item.id === dataid.id ? "#6b4eff" : "#e3e4e5" }]} titleStyle={styles.titleStyle}
          onPress={(e) => press(item)}
        />
      )}
      <View style={styles.footer}>
        <Button text="Select" />
      </View>
    </View>
  )
}
export default Practice;