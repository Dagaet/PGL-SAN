import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { personalData } from "../data/Data";
import appColors from "../assets/Styles/appColors";
import QRCode from "react-native-qrcode-svg";

const QrScreen = () => {
  const {
    personalImage,
    name,
    info,
    iconsUrls,
    iconsMedia,
    qrURL,
    informationData,
  } = personalData;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitleText}>{name}</Text>
          <Image style={styles.personalImage} source={personalImage} />
          <Text style={styles.infoData}>{info}</Text>
          <View style={styles.textStyle}>
            <Text style={styles.headerInfoStyle}>QR code: </Text>
            <View style={styles.qrCode}>
              <QRCode value={qrURL}></QRCode>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default QrScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0d0c1",
  },
  cardContainer: {
    width: "90%",
    height: "90%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor: appColors.white,
    borderRadius: 40,
    marginVertical: 20,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 25,
  },
  cardTitleContainer: {
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  cardTitleText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  personalImage: {
    height: 150,
    width: 150,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: appColors.buttonColor,
  },
  infoData: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
  },
  textStyle: {
    color: "black",
    textAlign: "center",
    borderColor: "black",
    backgroundColor: appColors.secondary,
    marginTop: 20,
    marginBottom: 20,
    width: 230,
    height: 200,
    borderRadius: 50,
  },
  headerInfoStyle: {
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "800",
  },
  informationStyle: {
    alignItems: "flex-start",
    height: 20,
    width: 200,
    marginLeft: 30,
  },
  qrCode: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    height: 110,
    width: 110,
    backgroundColor: appColors.white,
  },
});
