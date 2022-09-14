import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Button from '../../component/Button';
import data from './data';
import CardSqureImg from '../../component/CardSqureImg';
import styles from './style';
import { useState } from 'react';

const MainHome = ({}) => {
    const [terminal, setterminal] = useState({})
    function display(i) {
        return (
            setterminal(i)
            //  navigation.navigate("CreateAccount")
        )
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.btn}>
                    <Button text="World" buttonStyle={styles.buttonStyle} />
                    <Button text="U.S" buttonStyle={styles.buttonStyles} titleStyle={styles.titleStyle} />
                    <Button text="Politics" buttonStyle={styles.buttonStyles} titleStyle={styles.titleStyle} />
                    <Button text="Tech" buttonStyle={styles.buttonStyles} titleStyle={styles.titleStyle} />
                    <Button text="World" buttonStyle={styles.buttonStyles} titleStyle={styles.titleStyle} />
                    <Button text="U.S" buttonStyle={styles.buttonStyles} titleStyle={styles.titleStyle} />
                </View>
                <View style={styles.terminal}>
                    <Image source={terminal.img} style={styles.img} />
                    <Text style={styles.terminalText}>{terminal.title}</Text>
                    <View style={styles.display}>
                        <Text style={styles.textSmall}>{terminal.time} </Text>
                        <Text style={styles.textSmall}>{terminal.subTitle}</Text>
                    </View>
                </View>
                <View>

                </View>
                {data.map((item, i) =>
                    <CardSqureImg key={i}
                        source={item.img}
                        title={item.title}
                        subTitle={item.subTitle}
                        time={item.time}
                        onPress={() => display(item)}
                    />
                )}
            </ScrollView>
        </View>
    )
}

export default MainHome;