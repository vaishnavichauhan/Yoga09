import { View, Text,ProgressBarAndroid} from 'react-native';
import React from 'react';
import Input from '../../component/Input';
import styles from './style';
import Button from '../../component/Button';

const Email= () => {
  return (
    <View style={styles.container}>
        <View style={styles.Header}>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.3}
        />
      <Text style={styles.text}>What's your email address?</Text>
      <Input/>

        </View>
       
    <View style={styles.space}>

    </View>
      <View style={styles.footer}>
      <Button text="Continue"/>
      </View>
   
    </View>
  )
}
export default Email;