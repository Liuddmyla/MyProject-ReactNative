import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function RegistrationScreen() {
 
 
 
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/PhotoBG.jpg")}
      ></ImageBackground>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
