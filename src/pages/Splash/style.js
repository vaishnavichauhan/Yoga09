import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        position: "relative",
    },
    image: {
        flex: 1,
        resizeMode: "contain",
    },
    subTitle: {
        textAlign: "center",
        fontSize: 20,
        color: Colors.graylight,
    },

    title: {
        textAlign: "center",
        marginTop: 10,

    },
    bottomButton: {
        flex: 1,
        position: "absolute",
        bottom: 35,
        left: 20,
        right: 20,
    },
    buttonStyle: {
        backgroundColor: Colors.white,

    },
    titleStyle: {
        color: Colors.black,
    }


});

export default styles;