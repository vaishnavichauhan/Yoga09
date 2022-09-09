import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 12,
        marginBottom: 20,
        marginTop: 10,
       
    },
    header:{
        flex:1,
    },
    inputStyle:{
        marginBottom:10,
    },
    headerText:{
        color:Colors.blue,
        fontWeight: "bold",
    },
    space:{
        flex:2,
    },
    footer:{
        flex:1,
        justifyContent: "center",
    },
    footerText:{
        marginBottom: 15,
    },
    footerColor:{
        color:Colors.blue,
        fontWeight: "bold",
    }
});
export default styles;