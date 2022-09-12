import React from 'react';
import {Text ,TextInput} from 'react-native';
import styles from './style';


const Input = ({value,placeholder,onChangeText,keybordtype,inputStyle,onPressIn,onPressOut}) => {
    return (
        <TextInput
        style={[styles.input, inputStyle]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keybordtype}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      />
    )
}

export default Input;