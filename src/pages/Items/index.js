import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import Card from '../../component/Card'
import data from './data';



const Items =()=> {
  return (
    
    <View style={styles.container}>
    <ScrollView>
      <View style={styles.main}>
      {data.map((item) =>
        <Card title={item.title}
              imagespath={item.img}
        />
      )}
      </View>
  

     
</ScrollView>
    </View>
  )
}
export default Items;