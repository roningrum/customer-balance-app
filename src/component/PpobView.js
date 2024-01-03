import { Image,Text, StyleSheet, View } from "react-native";

const PpobView=({ppob})=>{
    console.log(ppob)
    return (
        <View style={styles.listPembayaranMenu}>
        <Image
              source={{uri: ppob.image}}
              style={styles.menuListPembayaran}/>
        </View>
    ); 

}
const styles = StyleSheet.create({
    listPembayaran: {
      marginHorizontal: 24,
      marginTop: 30,
    },
    listPembayaranTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: "#852884",
    },
    listPembayaranMenu:{
      marginTop:18,
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal:4,
      justifyContent: "space-between",
    },
    menuListPembayaran:{
      width:76,
      height:80
    },
  });
export default PpobView