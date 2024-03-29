import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function App() {
  const bgAsset = require("./assets/img/Background.png");
  return (
    <View style={styles.container}>
      <ImageBackground source={bgAsset} style={styles.backgroundImage}>
        <View style={styles.header}>
          <View style={styles.whiteText}>
            <Text style={styles.textGreeting}>Assalammualaikaum</Text>
            <Text style={styles.textCustomerNama}>Anissa Avrillia</Text>
          </View>
          <Image
              source={require("./assets/img/Notification.png")}
              style={{ width: 24, height: 24}}
            />
        </View>
        <View style={styles.cardInfo}>
          <View style={styles.saldoContainer}>
            <Text style={styles.saldoTitle}>Saldo</Text>
            <Text style={styles.saldoAmount}>Rp2.000.000</Text>
          </View>
          <View style={styles.borderLine}></View>
          <View style={styles.saldoContainer}>
            <View style={styles.menuSaldo}>
              <Image
                source={require("./assets/img/qrisicon.png")}
                style={styles.menuSaldoIcon}
              />
              <Text style={styles.menuSaldoName}>Qris</Text>
            </View>
            <View style={styles.menuSaldo}>
              <Image
                source={require("./assets/img/kirimdana.png")}
                style={styles.menuSaldoIcon}
              />
              <Text style={styles.menuSaldoName}>Dana</Text>
            </View>
            <View style={styles.menuSaldo}>
              <Image
                source={require("./assets/img/topupicon.png")}
                style={styles.menuSaldoIcon}
              />
              <Text style={styles.menuSaldoName}>TopUp</Text>
            </View>
          </View>
        </View>
        <View style={styles.listPembayaran}>
          <Text style={styles.listPembayaranTitle}>List Pembayaran</Text>
          <View style={styles.listPembayaranMenu}>
          <Image
                source={require("./assets/img/Telco.png")}
                style={styles.menuListPembayaran}
              />
          <Image
                source={require("./assets/img/Pln.png")}
                style={styles.menuListPembayaran}
              />
          <Image
                source={require("./assets/img/Pdam.png")}
                style={styles.menuListPembayaran}
              />
          <Image
                source={require("./assets/img/School.png")}
                style={styles.menuListPembayaran}
              />
          </View>
        </View>
        <View style={styles.promoContainer}>
          <View style={styles.promoList}>
          <Text style={styles.promoListTitle}>Promo & Diskon</Text>
          <Text style={styles.promoListMore}>Lihat Semua</Text>
          </View>
        </View>
        <Image source={require('./assets/img/Promo.png')} style={{width:"100%", height:200, marginTop:16, marginHorizontal:8}}/>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  header: {
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",  // Set justifyContent to "space-between"
    marginHorizontal: 16,
  },
  textGreeting: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
  },
  textCustomerNama: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  cardInfo: {
    marginHorizontal: 24,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
  },
  saldoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  saldoTitle: {
    color: "#852884",
    fontSize: 14,
  },
  saldoAmount: {
    color: "#852884",
    fontSize: 16,
    fontWeight: "600",
  },
  borderLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F2",
    marginVertical: 16,
  },
  menuSaldo: {
    alignItems: "center",
  },
  menuSaldoIcon: {
    width: 60,
    height: 60,
  },
  menuSaldoName: {
    marginTop: 10,
    color: "#852884",
  },
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
    justifyContent: "space-between",
  },
  menuListPembayaran:{
    width:76,
    height:80
  },
  promoContainer:{
    marginTop:32,
    marginHorizontal:24
  },
  promoList:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  promoListTitle:{
    fontSize: 16,
    fontWeight: "600",
    color: "#852884",
  },
  promoListMore:{
    color: '#39B54A'
  }
});
