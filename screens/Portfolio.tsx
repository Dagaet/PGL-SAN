import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { personalData } from "../data/Data";
import appColors from "../assets/Styles/appColors";

const Portfolio = () => {
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
            <Text style={styles.headerInfoStyle}>Cosas que me gustan: </Text>
            {informationData.map((data, key) => (
              <Text key={key} style={styles.informationStyle}>
                {">"} {data}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Portfolio;

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
    padding: 80,
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
  personalImage: {
    height: 150,
    width: 150,
    borderRadius: 50,
  },
  cardTitleContainer: {
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    width: "100%",
  },
  cardTitleText: {
    fontSize: 22,
    fontWeight: "bold",
    paddingTop: 10,
    marginBottom: 20,
  },
  cardBodyText: {
    height: 120,
    margin: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
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
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonDefault: {
    backgroundColor: "#ccc",
    borderColor: "#999",
  },
  buttonClose: {
    backgroundColor: "#F194FF",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  socialIconsContainer: {
    flexDirection: "row",
  },
  iconImage: {
    bottom: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  informationStyle: {
    alignItems: "flex-start",
    height: 20,
    width: 200,
    marginLeft: 30,
  },
  headerInfoStyle: {
    marginTop: 10,
    marginLeft: "15%",
    marginBottom: 20,
  },
  infoData: {
    textAlign: "center",
    marginTop: 10,
  },
  qr: {
    bottom: 10,
  },
});
