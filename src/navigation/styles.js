import { StyleSheet } from "react-native";
import { Text ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Colors from "../theme/colors";

const styles = StyleSheet.create({
    WelComeBackS: {
        headerTitle: ""
    },
    LoginS: {
        headerTitle: "Log in",
        headerTitleAlign: 'center',
    },
    AuthenticationS:{
        headerTitle: "",
        headerRight: () => (
            <TouchableOpacity
          ><Text style={{color:Colors.blue, fontSize: 18}}>Change number</Text>
          </TouchableOpacity>
            ),
    },
    PracticeS:{
        headerTitle: "",
        headerRight: () => (
            <TouchableOpacity
          ><Text style={{color:Colors.graydark, fontSize: 18}}>Skip</Text>
          </TouchableOpacity>
            ),
    },
    EmailS:{
        headerTitle: "",
    },
    FindshopS:{
        headerTitle: "",
    },
    ItemsS:{
        headerTitle: "All items",
        headerTitleAlign: 'center',
        headerRight: () => (
            <Icon name="settings" size={25} color="black" />
            ),

    }
   
})


export default styles;