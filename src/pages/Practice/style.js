import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

const styles = StyleSheet.create({

   container: {
      flex: 1,
      marginHorizontal: 12,
      marginBottom: 20,
      marginTop: 10,
   },
  
   buttonStyle:{
      backgroundColor: Colors.gray,
      marginBottom: 5,
      borderRadius: 10,
   },
   titleStyle: {
      color: Colors.black,
   },
   header: {
      flex: 1,
      alignItems: "center",
      marginBottom: 35,
   },
   footer: {
      flex: 1,

   }

})
export default styles;